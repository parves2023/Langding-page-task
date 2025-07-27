import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  priceRange: string;
  onShopNow: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, priceRange, onShopNow }) => {
  return (
<div className="bg-[#F2F4F6] font-poppins rounded-xl  hover:shadow-lg transition-shadow duration-300 w-full overflow-hidden">
  <div className=" rounded-t-xl p-3">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>
  <div className="px-4 pt-4 pb-6">
    <h3 className="text-[#1A1A1A] text-[15px] font-semibold mb-1 line-clamp-2">
      {title}
    </h3>
    <p className="text-[#666] text-sm mb-4">{priceRange}</p>
    <button
      onClick={onShopNow}
      className="w-fit px-5 py-[6px] bg-[#C8F169] hover:bg-[#b2df5a] text-black text-sm font-medium rounded-full transition-colors duration-200"
    >
      Shop Now
    </button>
  </div>
</div>

  );
};

export default ProductCard;