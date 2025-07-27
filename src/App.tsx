import React from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ProductSlider from './components/ProductSlider';
import TrustedBy from './components/TrustedBy';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

import agri1 from "./assets/Agricultural Products/image1.png"
import agri2 from "./assets/Agricultural Products/image2.png"
import agri3 from "./assets/Agricultural Products/image3.png"
import agri4 from "./assets/Agricultural Products/image4.png"


import land1 from "./assets/Landscape Products/image1.png"
import land2 from "./assets/Landscape Products/image2.png"
import land3 from "./assets/Landscape Products/image3.png"
import land4 from "./assets/Landscape Products/image4.png"

const agriculturalProducts = [
  {
    id: 1,
    image: agri1,
    title: "JF Barbed Wire- 270 GSM",
    priceRange: "₹4,995.00"
  },
  {
    id: 2,
    image: agri2,
    title: "FGC RustFree Fencing Poles",
    priceRange: "₹489.00 - ₹1,999.00"
  },
  {
    id: 3,
    image: agri3,
    title: "GI Poultry Mesh",
    priceRange: "₹1,260.00 - ₹10,750.00"
  },
  {
    id: 4,
    image: agri4,
    title: "JF Bluelink Mesh",
    priceRange: "₹3,067.50 - ₹6,362.50"
  },
  {
    id: 5,
    image: agri1,
    title: "Chain Link Fencing",
    priceRange: "₹2,500.00 - ₹4,500.00"
  },
  {
    id: 6,
     image: agri2,
    title: "Welded Wire Mesh",
    priceRange: "₹1,800.00 - ₹3,200.00"
  }
];

const landscapeProducts = [
  {
    id: 1,
    image: land1,
    title: "Antigo Fence",
    priceRange: "₹10,024.00 - ₹14,984.82"
  },
  {
    id: 2,
    image: land2,
    title: "JF Australian Trellis",
    priceRange: "₹8,992.00"
  },
  {
    id: 3,
    image: land3,
    title: "JF Polyhex Mesh",
    priceRange: "₹4,060.00 - ₹10,770.00"
  },
  {
    id: 4,
     image: land4,
    title: "JF Privacy Grass Wall",
    priceRange: "₹1,846.10 - ₹18,284.10"
  },
  {
    id: 5,
    image: land1,
    title: "Garden Trellis Panel",
    priceRange: "₹3,500.00 - ₹7,800.00"
  },
  {
    id: 6,
    image: land2,
    title: "Decorative Fence",
    priceRange: "₹5,200.00 - ₹12,500.00"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSlider />
      <ProductSlider title="Agricultural Products" products={agriculturalProducts} />
      <ProductSlider title="Landscape Products" products={landscapeProducts} />
      <TrustedBy />
      <WhyUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;