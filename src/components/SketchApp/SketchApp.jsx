import { Canvas } from "@react-three/fiber";
import DrawingCanvas from "../DrawingCanvas/DrawingCanvas";
import "./SketchApp.css";

export const SketchApp = () => {
  return (
    <Canvas>
      <DrawingCanvas />
      {/* Add 3D scene content */}
    </Canvas>
  );
};
