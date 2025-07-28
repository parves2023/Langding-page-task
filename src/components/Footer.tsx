import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import JFLogo from '../assets/NavbarImg/logo.png'; // Make sure to import your JF logo image

const Footer = () => {
  return (
<div>
      <footer className="bg-[#002b55] text-white container mx-auto rounded-3xl px-4 sm:px-6 lg:px-12 py-16">
      <div className=" ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Join Our JF Products</h3>
            <p className="text-gray-300 mb-6">We'll tell you about store updates and discounts</p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-[#003366] border border-[#004080] text-white placeholder-gray-400 focus:outline-none focus:border-white"
              />
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="newsletter" className="rounded" />
                <label htmlFor="newsletter" className="text-sm text-gray-300">
                  Yes, subscribe me to your newsletter.
                </label>
              </div>
              <button className="w-full bg-white hover:bg-gray-100 text-[#002b55] py-3 rounded-lg font-semibold transition-colors duration-200">
                Join Now
              </button>
            </div>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Information</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blogs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Helpful</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">My Account</a></li>
            </ul>
          </div>
        </div>

        {/* Company Info and Contact */}
        <div className="mt-12 pt-8 border-t border-[#004080] flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className='bg-white w-28 p-4 rounded-full'>
              <img src={JFLogo} alt="JF Products Logo" className="w-full h-full" />
            </div>
            <div>
              <div className="font-semibold">Our Branches</div>
              <div className="text-sm text-gray-300">Coimbatore, Chennai, Hyderabad, Goa, Kochi</div>
            </div>
          </div>
          <button className="bg-[#B0DD1D] rounded-3xl text-black px-6 py-2 border-none font-semibold border border-white transition-colors duration-200">
            Contact Us
          </button>
        </div>


      </div>
    </footer>

            {/* Copyright and Social */}
        <div className=" p-8 container mx-auto text-gray-900 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm  mb-4 md:mb-0">
            Copyright © 2025 JF Products. All rights reserved
          </div>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 text-gray-700 hover:text-white cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-gray-700 hover:text-white cursor-pointer transition-colors" />
            <Youtube className="w-5 h-5 text-gray-700 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
</div>
  );
};

export default Footer;