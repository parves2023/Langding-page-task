import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from 'react-icons/lia';

interface Product {
  id: number;
  image: string;
  title: string;
  priceRange: string;
}

interface ProductSliderProps {
  title: string;
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Default for desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(2); // Mobile
      } else {
        setItemsPerPage(4); // Desktop
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-8 md:py-16 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">{title}</h2>

        <div className="relative">
          {/* Left Arrow - hidden on mobile when at start */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute -left-3 md:-left-5 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ${currentIndex === 0 ? 'md:block hidden' : 'block'}`}
          >
            <LiaLongArrowAltLeftSolid className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>

          {/* Right Arrow - hidden on mobile when at end */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`absolute -right-3 md:-right-5 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ${currentIndex >= maxIndex ? 'md:block hidden' : 'block'}`}
          >
            <LiaLongArrowAltRightSolid className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>

          {/* Products */}
          <div className="overflow-hidden px-2 md:px-0">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <ProductCard
                    image={product.image}
                    title={product.title}
                    priceRange={product.priceRange}
                    onShopNow={() => console.log(`Shop now for ${product.title}`)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots indicator for mobile */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerPage)}
              className={`w-2 h-2 rounded-full transition-colors ${currentIndex >= index * itemsPerPage && currentIndex < (index + 1) * itemsPerPage ? 'bg-gray-900' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;