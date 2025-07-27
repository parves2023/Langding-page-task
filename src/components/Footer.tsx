import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Join Our JF Products</h3>
            <p className="text-gray-300 mb-6">We'll tell you about store updates and discounts</p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-700 text-white placeholder-gray-400 focus:outline-none focus:border-accent-400"
              />
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="newsletter" className="rounded" />
                <label htmlFor="newsletter" className="text-sm text-gray-300">
                  Yes, subscribe me to your newsletter.
                </label>
              </div>
              <button className="w-full bg-accent-400 hover:bg-accent-500 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
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
        <div className="mt-12 pt-8 border-t border-navy-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full flex items-center justify-center">
              <div className="text-white font-bold text-lg">JF</div>
            </div>
            <div>
              <div className="font-semibold">Our Branches</div>
              <div className="text-sm text-gray-300">Coimbatore, Chennai, Hyderabad, Goa, Kochi</div>
            </div>
          </div>
          <button className="bg-accent-400 hover:bg-accent-500 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
            Contact Us
          </button>
        </div>

        {/* Copyright and Social */}
        <div className="mt-8 pt-8 border-t border-navy-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-300 mb-4 md:mb-0">
            Copyright © 2025 JF Products. All rights reserved
          </div>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;