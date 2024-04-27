import { useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { VanGoghRoom } from "./components/VanGoghRoom";
import { SketchApp } from "./components/SketchApp/SketchApp";
import { InfoOverlay } from "./components/InfoOverlay/InfoOverlay";
import { DrawingCanvas } from "./components/DrawingCanvas/DrawingCanvas";
import { Environment } from "@react-three/drei";
import { CameraManager } from "./components/CameraManager";
import "./App.css";

const App = () => {
  const [showDrawingCanvas, setShowDrawingCanvas] = useState(false);
  const [exploreRoom, setExploreRoom] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef();

  return (
    <div className="app">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 1 }}
      >
        {!showDrawingCanvas && (
          <VanGoghRoom
            exploreRoom={exploreRoom}
            setExploreRoom={setExploreRoom}
            setShowDrawingCanvas={setShowDrawingCanvas}
          />
        )}
        {showDrawingCanvas && (
          <SketchApp
            mousePosition={mousePosition}
            setShowDrawingCanvas={setShowDrawingCanvas}
          />
        )}
        <CameraManager />
        <Environment preset="sunset" />
      </Canvas>

      {showDrawingCanvas && (
        <DrawingCanvas
          setMousePosition={setMousePosition}
          isDrawing={isDrawing}
          setIsDrawing={setIsDrawing}
          canvasRef={canvasRef}
        />
      )}
      {!exploreRoom && !showDrawingCanvas && (
        <InfoOverlay
          setShowDrawingCanvas={setShowDrawingCanvas}
          setExploreRoom={setExploreRoom}
        />
      )}
    </div>
  );
};

export default App;
