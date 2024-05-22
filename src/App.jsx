import { useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { VanGoghRoom } from "./components/VanGoghRoom";
import { SketchApp } from "./components/SketchApp/SketchApp";
import { InfoOverlay } from "./components/InfoOverlay/InfoOverlay";
import { DrawingCanvas } from "./components/DrawingCanvas/DrawingCanvas";
import { Environment } from "@react-three/drei";
import { CameraManager } from "./components/CameraManager";
import "./App.css";
import ToggleCanvasButton from "./components/CanvasToggleButton/CanvasToggleButton";

const App = () => {
  const [showDrawingCanvas, setShowDrawingCanvas] = useState(false);
  const [exploreRoom, setExploreRoom] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDrawing, setIsDrawing] = useState(false);
  const [showInfoOverlay, setShowInfoOverlay] = useState(true); // State to track if InfoOverlay should be shown
  const [showToggleButton, setShowToggleButton] = useState(false); // State to track if ToggleCanvasButton should be shown

  const canvasRef = useRef();

  const toggleShowDrawingCanvas = () => {
    setShowDrawingCanvas(prev => !prev);
  };

  const handleStartDrawing = () => {
    setShowDrawingCanvas(true);
    setShowInfoOverlay(false); // Hide InfoOverlay after selection
    setShowToggleButton(true); // Show ToggleCanvasButton after selection
  };

  const handleExploreRoom = () => {
    setExploreRoom(true);
    setShowInfoOverlay(false); // Hide InfoOverlay after selection
    setShowToggleButton(true); // Show ToggleCanvasButton after selection
  };

  return (
    <div className="app">
       {showToggleButton && (
        <ToggleCanvasButton 
          toggleShowDrawingCanvas={toggleShowDrawingCanvas} 
          showDrawingCanvas={showDrawingCanvas} 
        />
      )}

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
      {showInfoOverlay && (
        <InfoOverlay
          handleStartDrawing={handleStartDrawing}
          handleExploreRoom={handleExploreRoom}
        />
      )}
    </div>
  );
};

export default App;
