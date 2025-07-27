import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "JF Privezy Grass Wall",
      subtitle: "The Perfect Blend Of Greenery",
      image: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=600",
      background: "bg-gradient-to-r from-green-50 to-green-100"
    },
    {
      id: 2,
      title: "Premium Artificial Turf",
      subtitle: "Durable & Long-lasting Solutions",
      image: "https://images.pexels.com/photos/2219118/pexels-photo-2219118.jpeg?auto=compress&cs=tinysrgb&w=600",
      background: "bg-gradient-to-r from-blue-50 to-blue-100"
    },
    {
      id: 3,
      title: "Landscape Excellence",
      subtitle: "Transform Your Outdoor Space",
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600",
      background: "bg-gradient-to-r from-emerald-50 to-emerald-100"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          } ${slide.background}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex items-center justify-between h-full">
              <div className="flex-1 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  {slide.subtitle}
                </p>
                <button className="bg-accent-400 hover:bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Shop Now
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-accent-400 hover:bg-accent-500 text-white p-3 rounded-full transition-colors duration-200 z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-accent-400 hover:bg-accent-500 text-white p-3 rounded-full transition-colors duration-200 z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-accent-400' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;