import React from "react";
import "./ColorPicker.css";

export const ColorPicker = ({ color, setColor }) => {
  return (
    <div className="color-picker">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};
