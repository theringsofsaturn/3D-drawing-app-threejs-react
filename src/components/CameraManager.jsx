import { CameraControls } from "@react-three/drei";

export const CameraManager = () => {
  return (
    <CameraControls
      minZoom={1}
      maxZoom={3}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
      minAzimuthAngle={-Math.PI / 18}
      maxAzimuthAngle={Math.PI / 8}
      enablePan={false}
      mouseButtons={{ left: 1, wheel: 16 }}
      touches={{ one: 32, two: 512 }}
    />
  );
};
