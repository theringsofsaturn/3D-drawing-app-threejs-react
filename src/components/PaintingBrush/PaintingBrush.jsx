import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import modelPath from "/painting_brush.glb";

export const PaintingBrush = (props) => {
  const { nodes, materials } = useGLTF(modelPath);
  console.log("painting brush", nodes);
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 0, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={[10, 10, 10]}
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
