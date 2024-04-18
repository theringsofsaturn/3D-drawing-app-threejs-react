import React from "react";
import "./BrushSizeSlider.css";

export const BrushSizeSlider = ({ strokeWidth, setStrokeWidth }) => {
  return (
    <div className="brush-size-slider">
      <input
        type="range"
        min="1"
        max="20"
        value={strokeWidth}
        onChange={(e) => setStrokeWidth(parseInt(e.target.value))}
      />
    </div>
  );
};
