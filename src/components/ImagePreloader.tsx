import { useEffect, useState } from 'react';

interface ImagePreloaderProps {
  images: string[];
  onLoadComplete: () => void;
}

const ImagePreloader = ({ images, onLoadComplete }: ImagePreloaderProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = reject;
        img.src = src;
      });
    };

    const loadAllImages = async () => {
      try {
        await Promise.all(images.map(loadImage));
        onLoadComplete();
      } catch (error) {
        console.error('Error loading images:', error);
        // Aún así notificamos que la carga está completa para que la aplicación continúe
        onLoadComplete();
      }
    };

    loadAllImages();
  }, [images, onLoadComplete]);

  return null;
};

export default ImagePreloader; 