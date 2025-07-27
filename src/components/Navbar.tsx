import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side navigation */}
          <div className="flex items-center space-x-8">
            <a href="#" className="text-[#1A1A1A] hover:text-gray-900 font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-[#1A1A1A] hover:text-gray-900 font-medium transition-colors">
              Shop
            </a>
            <a href="#" className="text-[#1A1A1A] hover:text-gray-900 font-medium transition-colors">
              Blogs
            </a>
            <a href="#" className="text-[#1A1A1A] hover:text-gray-900 font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* Center logo */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full flex items-center justify-center">
              <div className="text-white font-bold text-lg">JF</div>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-gray-600" />
              <span className="text-[#1A1A1A] font-medium">Login</span>
            </div>
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-accent-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;