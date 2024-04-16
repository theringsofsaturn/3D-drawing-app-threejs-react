import { DrawingCanvas } from "../DrawingCanvas/DrawingCanvas";
import { Scene } from "../Scene/Scene";
import "./SketchApp.css";

export const SketchApp = () => {
  return (
    <>
      <DrawingCanvas />
      <Scene />
    </>
  );
};
