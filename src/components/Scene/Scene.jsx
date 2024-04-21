import React from "react";
import { Canvas } from "@react-three/fiber";
import { PaintingBrush } from "../PaintingBrush/PaintingBrush";
import { VanGoghAvatar } from "../VanGoghAvatar";
import { Environment } from "@react-three/drei";

export const Scene = ({ mousePosition, isDrawing, canvasRef }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 1 }}
    >
      <Environment preset="city" />
      <PaintingBrush
        mousePosition={mousePosition}
        isDrawing={isDrawing}
        canvasRef={canvasRef}
      />
      <VanGoghAvatar />
    </Canvas>
  );
};
