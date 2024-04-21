import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import modelPath from "/van_gogh_avatar.glb";

export function VanGoghAvatar(props) {
  const { nodes, materials } = useGLTF(modelPath);
  return (
    <group
      {...props}
      dispose={null}
      position={[7, -5, -2]}
      rotation={[0, -1, 0]}
      scale={1}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials["Material.015"]}
        position={[-0.009, 2.878, 0.187]}
        rotation={[1.359, -0.048, -0.194]}
        scale={[0.043, 0.01, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials["Material.015"]}
        position={[-0.009, 2.58, 0.215]}
        rotation={[1.508, -0.048, -0.194]}
        scale={[0.043, 0.01, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials["Material.015"]}
        position={[-0.009, 2.256, 0.215]}
        rotation={[1.557, -0.048, -0.194]}
        scale={[0.043, 0.01, 0.043]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials["Material.005"]}
        position={[0.735, 5.386, 0.572]}
        rotation={[0, -0.781, -1.241]}
        scale={0.047}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.Eye1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials["Eye-Lens"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials["Material.009"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials["Material.011"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_21.geometry}
        material={materials.Character}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_23.geometry}
        material={materials["Material.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_25.geometry}
        material={materials["Material.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_27.geometry}
        material={materials["Material.012"]}
      />
    </group>
  );
}

useGLTF.preload(modelPath);
