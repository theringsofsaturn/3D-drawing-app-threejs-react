import React, { useRef, useEffect, useState } from "react";

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
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 2,
        }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          background: "rgba(255, 255, 255, 0.8)",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{
            width: "60px",
            height: "60px",
            border: "none",
            borderRadius: "50%",
            appearance: "none",
            WebkitAppearance: "none",
            padding: 0,
            margin: 0,
            cursor: "pointer",
          }}
        />
        <div
          style={{
            width: "200px",
            marginTop: "20px",
          }}
        >
          <input
            type="range"
            min="1"
            max="20"
            value={strokeWidth}
            onChange={(e) => setStrokeWidth(parseInt(e.target.value))}
            style={{
              width: "100%",
              cursor: "pointer",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "12px",
              color: "#666",
            }}
          >
            <span>1</span>
            <span>20</span>
          </div>
        </div>
      </div>
    </>
  );
};
