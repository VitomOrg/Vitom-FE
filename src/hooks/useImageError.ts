import { useState } from "react";

export const useImageError = () => {
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    setImgError(true);
  };

  return { imgError, handleImageError };
};
