import React from "react";
import { Canvas } from "@react-three/fiber";
import { PaintingBrush } from "../PaintingBrush/PaintingBrush";
import { Environment, OrbitControls } from "@react-three/drei";

export const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 1 }}
    >
      <OrbitControls />
      <Environment preset="city" />
      <PaintingBrush />
    </Canvas>
  );
};
