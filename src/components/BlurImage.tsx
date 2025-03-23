import React, { useState, useEffect } from 'react';
import  cn  from "classnames";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

const BlurImage = ({ 
  src, 
  alt, 
  className, 
  aspectRatio = "aspect-video", 
  ...props 
}: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoading(false);
      };
    }
  }, [src]);

  return (
    <div className={cn(
      "overflow-hidden relative", 
      aspectRatio,
      className
    )}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "duration-700 ease-in-out object-cover w-full h-full",
          isLoading ? "scale-110 blur-sm" : "scale-100 blur-0"
        )}
        {...props}
      />
    </div>
  );
};

export default BlurImage;