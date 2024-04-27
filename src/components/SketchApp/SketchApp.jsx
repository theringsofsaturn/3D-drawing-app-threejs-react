import { PaintingBrush } from "../PaintingBrush/PaintingBrush";
import { VanGoghAvatar } from "../VanGoghAvatar";

export const SketchApp = ({ mousePosition, setShowDrawingCanvas }) => {
  return (
    <>
      <PaintingBrush mousePosition={mousePosition} />
      <VanGoghAvatar />
    </>
  );
};
