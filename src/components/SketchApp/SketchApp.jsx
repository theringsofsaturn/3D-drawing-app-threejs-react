import { Canvas } from "@react-three/fiber";
import DrawingCanvas from "../DrawingCanvas/DrawingCanvas";
import "./SketchApp.css";

export const SketchApp = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <DrawingCanvas />
      {/* Add 3D scene content */}
    </div>
  );
};
