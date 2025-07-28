import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import NavLogo from "../assets/NavbarImg/logo.png";
import NavbarProfile from "../assets/NavbarImg/Navbar-Profile.png";
import NavbarCart from "../assets/NavbarImg/Cart.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 text-lg shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Left side navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
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

          {/* Hamburger menu for mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-[#1A1A1A] focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>

          {/* Center logo */}
          <div className="flex-shrink-0 md:mt-16">
            <div className='bg-white p-4 rounded-full w-[132px]'>
              <img src={NavLogo} alt="navlogo" className='object-cover' />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-[#1A1A1A] font-medium">Login</span>
              <img src={NavbarProfile} alt="NavbarProfile" className='size-6' />
            </div>
            <Search className="size-6 text-[#1A1A1A] cursor-pointer hover:text-gray-900 transition-colors" />
            <div className="relative cursor-pointer">
              <img src={NavbarCart} alt="navlogo" className='object-cover size-6' />
              <span className="absolute -top-2 -right-[10px] bg-[#1A1A1A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-md">
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-[#1A1A1A] hover:text-gray-900 font-medium transition-colors py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-[#1A1A1A] hover:text-gray-900 font-medium transition-colors py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Shop
              </a>
              <a 
                href="#" 
                className="text-[#1A1A1A] hover:text-gray-900 font-medium transition-colors py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Blogs
              </a>
              <a 
                href="#" 
                className="text-[#1A1A1A] hover:text-gray-900 font-medium transition-colors py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
              <div className="flex items-center space-x-2 pt-2">
                <span className="text-[#1A1A1A] font-medium">Login</span>
                <img src={NavbarProfile} alt="NavbarProfile" className='size-6' />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;