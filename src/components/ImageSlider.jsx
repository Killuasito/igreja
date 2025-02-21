import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageSlider = ({ images, autoPlayTime = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        handleSlideChange((currentIndex + 1) % images.length);
      }
    }, autoPlayTime);

    return () => clearInterval(timer);
  }, [currentIndex, images.length, autoPlayTime, isTransitioning]);

  const handleSlideChange = (newIndex) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(newIndex);
      setTimeout(() => setIsTransitioning(false), 700); // Combina com a duração da transição
    }
  };

  const goToPrevious = () => {
    handleSlideChange(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    handleSlideChange((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden group">
      {/* Slides Container */}
      <div className="relative h-full w-full">
        {images.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out
              ${
                index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay mais suave */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50"></div>

            {/* Conteúdo do Slide */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-4xl mx-auto px-4 space-y-6">
                {slide.title && (
                  <h2
                    className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg
                               transform transition-all duration-500 delay-100
                               translate-y-0 opacity-100"
                  >
                    {slide.title}
                  </h2>
                )}
                {slide.description && (
                  <p
                    className="text-xl md:text-2xl text-gray-100 drop-shadow-md
                             transform transition-all duration-500 delay-200
                             translate-y-0 opacity-100"
                  >
                    {slide.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de navegação sempre visíveis e maiores */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={goToPrevious}
          className="w-14 h-14 rounded-full bg-black/30 hover:bg-[#FF6B00] 
                   flex items-center justify-center transform 
                   transition-all duration-300 hover:scale-110
                   focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
        >
          <FaArrowLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={goToNext}
          className="w-14 h-14 rounded-full bg-black/30 hover:bg-[#FF6B00] 
                   flex items-center justify-center transform 
                   transition-all duration-300 hover:scale-110
                   focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
        >
          <FaArrowRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Indicadores maiores e mais interativos */}
      <div className="absolute bottom-10 left-0 right-0">
        <div className="flex justify-center gap-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 
                ${
                  index === currentIndex
                    ? "w-12 bg-[#FF6B00]"
                    : "w-3 bg-white/50 hover:bg-white hover:scale-110"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Contador de slides (opcional) */}
      <div className="absolute top-4 right-4 bg-black/50 px-4 py-2 rounded-full">
        <span className="text-white font-medium">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
