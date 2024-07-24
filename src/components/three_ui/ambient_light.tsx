// src/components/lights/AmbientLight.tsx
import React from "react";

interface AmbientLightProps {
  intensity?: number;
}

const AmbientLight: React.FC<AmbientLightProps> = ({ intensity = 1 }) => {
  return <ambientLight intensity={intensity} />;
};

export default AmbientLight;
