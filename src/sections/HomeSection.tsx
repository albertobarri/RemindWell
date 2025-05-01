// import React from 'react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HomeSection = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=2000",
      alt: "RemindWell Smart Pill Organizer 1"
    },
    {
      url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=2000",
      alt: "RemindWell Smart Pill Organizer 2"
    },
    {
      url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=2000",
      alt: "RemindWell Smart Pill Organizer 3"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="home" className="h-screen overflow-hidden relative w-full snap-start z-60">
      {/* Carrusel a pantalla completa */}
      <div className="absolute w-full h-screen">
        <div className="relative w-full h-screen">
          <div 
            className="flex h-screen transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-screen flex-shrink-0">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-screen object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          {/* Overlay oscuro para mejorar la legibilidad del texto */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

          {/* Controles de navegación */}
          <div className="absolute inset-0 pointer-events-none">
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-colors pointer-events-auto"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-8 h-8 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-colors pointer-events-auto"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-8 h-8 text-gray-800" />
            </button>

            {/* Indicadores de posición */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 pointer-events-auto">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contenido superpuesto */}
      <div className="relative z-10 h-full flex items-center justify-center pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 drop-shadow-lg">
            {t('home.title')}
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-8 sm:mb-10 max-w-2xl mx-auto px-4 drop-shadow-lg">
            {t('home.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;