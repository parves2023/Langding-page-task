import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  priceRange: string;
  onShopNow: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, priceRange, onShopNow }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-3">{priceRange}</p>
        <button
          onClick={onShopNow}
          className="w-full bg-accent-400 hover:bg-accent-500 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;