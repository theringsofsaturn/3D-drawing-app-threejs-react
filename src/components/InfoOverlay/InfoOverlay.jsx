import React from "react";
import "./InfoOverlay.css";

export const InfoOverlay = ({ handleStartDrawing, handleExploreRoom }) => {
  return (
    <div className="info-overlay">
      <div className="info-content">
        <h1>Welcome to the Van Gogh Drawing App</h1>
        <p>
          Explore the beautiful bedroom of Vincent van Gogh and unleash your
          creativity in our drawing canvas.
        </p>
        <button onClick={handleStartDrawing}>
          Start Drawing
        </button>
        <button onClick={handleExploreRoom}>
          Explore Room
        </button>
      </div>
    </div>
  );
};