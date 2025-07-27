import React from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ProductSlider from './components/ProductSlider';
import TrustedBy from './components/TrustedBy';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const agriculturalProducts = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "JF Barbed Wire- 270 GSM",
    priceRange: "₹4,995.00"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "FGC RustFree Fencing Poles",
    priceRange: "₹489.00 - ₹1,999.00"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "GI Poultry Mesh",
    priceRange: "₹1,260.00 - ₹10,750.00"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "JF Bluelink Mesh",
    priceRange: "₹3,067.50 - ₹6,362.50"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/2219118/pexels-photo-2219118.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Chain Link Fencing",
    priceRange: "₹2,500.00 - ₹4,500.00"
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Welded Wire Mesh",
    priceRange: "₹1,800.00 - ₹3,200.00"
  }
];

const landscapeProducts = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Antigo Fence",
    priceRange: "₹10,024.00 - ₹14,984.82"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "JF Australian Trellis",
    priceRange: "₹8,992.00"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/2219118/pexels-photo-2219118.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "JF Polyhex Mesh",
    priceRange: "₹4,060.00 - ₹10,770.00"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "JF Privacy Grass Wall",
    priceRange: "₹1,846.10 - ₹18,284.10"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Garden Trellis Panel",
    priceRange: "₹3,500.00 - ₹7,800.00"
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400",
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