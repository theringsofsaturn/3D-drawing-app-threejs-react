import React, { useRef, useEffect, useState } from "react";
import "./DrawingCanvas.css";

export const DrawingCanvas = ({
  setMousePosition,
  isDrawing,
  setIsDrawing,
  canvasRef,
}) => {
  const [color, setColor] = useState("#FF0000");
  const [strokeWidth, setStrokeWidth] = useState(5);
  const contextRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      const context = canvas.getContext("2d");
      context.scale(2, 2);
      context.lineCap = "round";
      context.strokeStyle = color;
      context.lineWidth = strokeWidth;
      contextRef.current = context;
    }
  }, [color, strokeWidth, canvasRef]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
    setMousePosition({ x: offsetX, y: offsetY });
  };

  const draw = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    setMousePosition({ x: offsetX, y: offsetY });
    if (!isDrawing) return;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  return (
    <>
      <canvas
        className="canvas-2d"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <div className="color-picker-wrapper">
        <input
          className="color-input"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <div className="stroke-wrapper">
          <input
            className="stroke-input"
            type="range"
            min="1"
            max="20"
            value={strokeWidth}
            onChange={(e) => setStrokeWidth(parseInt(e.target.value))}
          />
          <div className="stroke-range">
            <span>1</span>
            <span>20</span>
          </div>
        </div>
      </div>
    </>
  );
};
