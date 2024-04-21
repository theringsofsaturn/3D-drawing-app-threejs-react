import React from "react";
import { Html } from "@react-three/drei";
import "./InfoOverlay.css";

export const InfoOverlay = ({ setShowDrawingCanvas, setExploreRoom }) => {
  return (
    <Html>
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
    </Html>
  );
};
