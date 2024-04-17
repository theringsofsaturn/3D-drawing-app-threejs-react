import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import modelPath from "/painting_brush_pivot.glb";
import { useFrame, useThree } from "@react-three/fiber";

export const PaintingBrush = ({
  mousePosition,
  isDrawing,
  canvasRef,
  ...props
}) => {
  const { nodes, materials } = useGLTF(modelPath);
  const { camera } = useThree();
  const pencilRef = useRef();

  useFrame(() => {
    const pencil = pencilRef.current;

    if (pencil) {
      const xPos = mousePosition.x;
      const yPos = mousePosition.y;

      const mouse = new THREE.Vector2(
        (xPos / window.innerWidth) * 2 - 1,
        -(yPos / window.innerHeight) * 2 + 1
      );

      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);

      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const mousePos = camera.position
        .clone()
        .add(dir.multiplyScalar(distance));

      pencil.position.copy(mousePos);
    }
  });

  return (
    <group {...props} dispose={null} ref={pencilRef}>
      <group
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.01, 0.01, 0.01]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.wire_199194189}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.wire_255255255}
        />
      </group>
    </group>
  );
};

useGLTF.preload(modelPath);
