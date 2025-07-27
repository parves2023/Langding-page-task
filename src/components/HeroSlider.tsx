import React, { useState, useEffect } from "react";
import Slideimg1 from "../assets/Hero/Slider1.png";
import Slideimg2 from "../assets/Hero/Slider2.png";
import Slideimg3 from "../assets/Hero/Slider3.png";
import SliderBg from "../assets/Hero/Slider-bg.png";
import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "JF Privezy Grass Wall",
      subtitle: "The Perfect Blend Of Greenery",
      image: Slideimg1,
      background: "bg-[#f2f4f6]",
    },
    {
      id: 2,
      title: "Premium Artificial Turf",
      subtitle: "Durable & Long-lasting Solutions",
      image: Slideimg2,
      background: "bg-[#f2f4f6]",
    },
    {
      id: 3,
      title: "Landscape Excellence",
      subtitle: "Transform Your Outdoor Space",
      image: Slideimg3,
      background: "bg-[#f2f4f6]",
    },
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
  }, [nextSlide,prevSlide]);

  return (
<div className="pt-5">
  <div className="relative h-96 md:h-[700px] container mx-auto rounded-3xl overflow-hidden bg-[#f2f4f6]">
  <div className="flex transition-transform duration-700 ease-in-out"
       style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
    {slides.map((slide, index) => (
      <div key={index} className="min-w-full flex items-center justify-center px-4 py-8">
        <div className="max-w-7xl w-full flex flex-row-reverse items-center justify-between gap-16">
          {/* Text section */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {slide.subtitle}
            </p>
            <button className="bg-[#B0DD1D] hover:bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Shop Now
            </button>
          </div>

          {/* Image section with background */}
          <div
            className="flex justify-center items-center"
            style={{
              width: "621px",
              height: "638px",
              borderRadius: "24px",
              padding: "45px",
              backgroundImage: `url(${SliderBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "24px",
                objectFit: "cover",
              }}
              className="shadow-2xl"
            />
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Arrows */}
  <button
    onClick={prevSlide}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#B0DD1D] hover:bg-accent-500 text-white p-3 rounded-full transition duration-200 z-10"
  >
    <LiaLongArrowAltLeftSolid className="w-6 h-6 text-[#1A1A1A]" />
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#B0DD1D] hover:bg-accent-500 text-white p-3 rounded-full transition duration-200 z-10"
  >
    <LiaLongArrowAltRightSolid className="w-6 h-6 text-[#1A1A1A]" />
  </button>
</div>
</div>

  );
};

export default HeroSlider;
