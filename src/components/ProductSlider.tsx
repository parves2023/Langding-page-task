import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

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
  const itemsPerPage = 4;
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
<section className="py-16 bg-gray-50 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>

    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="absolute -left-5 border border-gray-950 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        disabled={currentIndex >= maxIndex}
        className="absolute -right-5 border border-gray-950 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>

      {/* Products */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-1/4 flex-shrink-0 px-2">
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
  </div>
</section>

  );
};

export default ProductSlider;