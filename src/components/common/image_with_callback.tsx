import React, { useState, useEffect } from "react";
import { Frown } from "lucide-react"; // Assuming you're using Lucide Icons

interface ImageWithFallbackProps {
  src?: string; // `src` có thể undefined
  alt: string;
  className?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = "object-cover w-full h-full rounded-xl ",
}) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (!src) {
      setImgError(true);
    }
  }, [src]);

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <>
      {!imgError ? (
        <img
          src={src}
          alt={alt}
          className={className}
          onError={handleImageError}
        />
      ) : (
        <div className="grid gap-3 p-5 text-center rounded-tl-lg place-content-center place-items-center size-full bg-secondary text-muted-foreground rounded-xl ">
          <Frown className="size-16 text-muted-foreground/20" />
          <span>Failed to load image.</span>
        </div>
      )}
    </>
  );
};

export default ImageWithFallback;
