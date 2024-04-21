import React from "react";
import { Canvas } from "@react-three/fiber";
import { VanGoghRoom } from "../VanGoghRoom";
import { Environment } from "@react-three/drei";
import { CameraManager } from "../CameraManager";
import "./VanGoghRoomScene.css";

export const VanGoghRoomScene = ({
  setShowDrawingCanvas,
  setExploreRoom,
  exploreRoom,
}) => {
  return (
    <div className="van-gogh-room-scene">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 1 }}
      >
        <Environment preset="city" />
        <VanGoghRoom />
        <CameraManager />
      </Canvas>
      {!exploreRoom && (
        <div className="info-overlay">
          <h1>Welcome to the Van Gogh Drawing App</h1>
          <p>
            Explore the beautiful bedroom of Vincent van Gogh and unleash your
            creativity in our drawing canvas.
          </p>
          {setShowDrawingCanvas && (
            <button
              onClick={() => {
                setShowDrawingCanvas(true);
              }}
            >
              Start Drawing
            </button>
          )}
          {setExploreRoom && (
            <button onClick={() => setExploreRoom(true)}>Explore Room</button>
          )}
        </div>
      )}
    </div>
  );
};
