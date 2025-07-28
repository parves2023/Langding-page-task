import React, { useState } from 'react';

import Primaryimage from '../assets/Our Branches/Primaryimage.png' //bg color #f7fce8 border color #d7ee8e
import image1 from '../assets/Our Branches/image1.png' 
import image2 from '../assets/Our Branches/image2.png' 
import image3 from '../assets/Our Branches/image3.png' 
import image4 from '../assets/Our Branches/image4.png' 
import image5 from '../assets/Our Branches/image5.png' 
import blueshadow from '../assets/Our Branches/blueshadow.png'
import { GrLocation } from 'react-icons/gr';

// contact us background #002b55 
// blue shadow shoul dbe on the bottom of contact us bottom right 

// button color should be #b0dd1d

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const branches = [
    { name: 'COIMBATORE', image: Primaryimage },
    { name: 'CHENNAI', image: image1 },
    { name: 'HYDERABAD', image: image2 },
    { name: 'GOA', image: image3 },
    { name: 'KOCHI', image: image4 },
    { name: 'MUMBAI', image: image5 }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-8 border rounded-3xl relative">
        
        {/* Our Branches Section */}
        <div className="text-center mb-12 ">
<div className="inline-block bg-[#B0DD1D] px-4 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-6 md:mb-8 absolute -top-3 md:-top-5 left-1/2 transform -translate-x-1/2 md:left-[35rem] md:translate-x-0">
  OUR BRANCHES
</div>
          
          {/* Branch Icons */}
          <div className="flex justify-center items-center gap-8 flex-wrap mb-12">
            {branches.map((branch, index) => (
            <div key={index} className="text-center">
              <div className={`${index === 0 && "bg-[#f7fce8] border border-[#d7ee8e] rounded-lg p-4 mb-2"}`}>
                <img 
                  src={branch.image} 
                  alt={branch.name} 
                  className="mx-auto size-20 object-contain"
                />
              </div>
              {/* <span className="font-medium">{branch.name}</span> */}
            </div>
          ))}
          </div>
        </div>

        {/* Main Contact Section */}
        <div className=" rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left side - Contact Form */}
            <div className="bg-[#002b55]  rounded-2xl p-8 relative overflow-hidden">
              <h2 className="text-3xl font-medium text-white mb-8">Contact Us</h2>
              <img src={blueshadow} alt="blueshadow" className=' absolute -bottom-60 -right-60'  />
              
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#1a4166] text-white placeholder-gray-300 rounded-lg border border-slate-600 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#1a4166] text-white placeholder-gray-300 rounded-lg border border-slate-600 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#1a4166] text-white placeholder-gray-300 rounded-lg border border-slate-600 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Write message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#1a4166] text-white placeholder-gray-300 rounded-lg border border-slate-600 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300 resize-none"
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="bg-[#b0dd1d] hover:bg-green-500  font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Submit
                </button>
              </div>
            </div>

{/* Actual Map Embed (Grayscale with Overlay Address) */}
<div className="relative rounded-lg h-full overflow-hidden">
  <iframe
    title="JRR Towers Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.697157147643!2d77.57303837507798!3d12.942229287370552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f35063f061%3A0x4e6797297331738!2sJRR%20Towers!5e0!3m2!1sen!2sin!4v1694769721234!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{
      border: 0,
      filter: 'grayscale(100%) contrast(1.2) brightness(0.9)',
    }}
    allowFullScreen="true"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

  {/* Address overlay at bottom */}
  <div className="absolute bottom-5 left-5 right-5 bg-white bg-opacity-90 text-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-3">
    <div className="size-12 bg-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
      <GrLocation className='text-gray-700 size-6' />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-1">JRR Towers</h3>
      <p className="text-sm leading-snug">
        2nd Floor, Pattalamma Temple Rd,<br />
        Basavangudi, Bangalore, 560004
      </p>
    </div>
  </div>
</div>




          </div>
        </div>


      </div>
    </section>
  );
};

export default ContactUs;