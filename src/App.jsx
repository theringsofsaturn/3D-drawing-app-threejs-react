import { SketchApp } from "./components/SketchApp/SketchApp";
import { VanGoghRoomScene } from "./components/VanGoghRoomScene/VanGoghRoomScene";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [showDrawingCanvas, setShowDrawingCanvas] = useState(false);
  const [exploreRoom, setExploreRoom] = useState(false);

  return (
    <div className="app">
      {!showDrawingCanvas && !exploreRoom ? (
        <VanGoghRoomScene
          setShowDrawingCanvas={setShowDrawingCanvas}
          setExploreRoom={setExploreRoom}
        />
      ) : showDrawingCanvas ? (
        <SketchApp />
      ) : (
        <VanGoghRoomScene
          exploreRoom={exploreRoom}
          setExploreRoom={setExploreRoom}
        />
      )}
    </div>
  );
};

export default App;
