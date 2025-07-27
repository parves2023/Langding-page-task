import React from 'react';
import { Search, } from 'lucide-react';
import NavLogo from "../assets/NavbarImg/logo.png"
import NavbarProfile from "../assets/NavbarImg/Navbar-Profile.png"
import NavbarCart from "../assets/NavbarImg/Cart.png"

const Navbar = () => {
  return (
    <nav className="bg-white  sticky top-0 z-50 text-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
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
          <div className="flex-shrink-0 mt-16">
            <div className='bg-white p-4 rounded-full w-[132px] '>
              <img src={NavLogo} alt="navlogo" className='object-cover' />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              {/* <User className="w-5 h-5 text-[#1A1A1A]" /> */}
              <span className="text-[#1A1A1A] font-medium">Login</span>
              <img src={NavbarProfile} alt="NavbarProfile" className='size-6' />
            </div>
            <Search className="size-6 text-[#1A1A1A] cursor-pointer hover:text-gray-900 transition-colors" />
            <div className="relative cursor-pointer">
              {/* <ShoppingCart className="w-5 h-5 text-[#1A1A1A] hover:text-gray-900 transition-colors" /> */}

              <img src={NavbarCart} alt="navlogo" className='object-cover size-6' />
              <span className="absolute -top-2 -right-[10px] bg-[#1A1A1A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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