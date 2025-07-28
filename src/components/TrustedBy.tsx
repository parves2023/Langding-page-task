import React from 'react';


import blueback from "../assets/Trusted by/blueback.png"
import icon1 from "../assets/Trusted by/image1.png"
import icon2 from "../assets/Trusted by/image2.png"
import icon3 from "../assets/Trusted by/image3.png"
 
const TrustedBy = () => {
  const stats = [
    {
      icon: icon1,
      title: "Premium",
      subtitle: "Products",
    },
    {
      icon: icon2,
      value: "4000+",
      title: "Google Review",
    },
    {
      icon: icon3,
      title: "Delivery",
      subtitle: "Across India",
    },
  ];

  return (
    <section className="py-16 bg-[#002B55] max-w-7xl mx-auto rounded-3xl relative min-h-[332px] overflow-hidden font-poppins">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium text-white mb-4">
            Trusted by over 6K+ customers
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (


<div key={index} className="flex items-center justify-center space-x-4">
  <div className="bg-white rounded-full p-4">
    <img src={stat.icon} alt={stat.title} className="w-8 h-8" />
  </div>
  <div className="text-white">
    {stat.value && (
      <div className="text-2xl mb-1">{stat.value}</div>
    )}
    <div className="text-2xl">{stat.title}</div>
    {stat.subtitle && (
      <div className="text-2xl">{stat.subtitle}</div>
    )}
  </div>
</div>



          ))}
        </div>
      </div>

       <img src={blueback} alt="blueback"  className="absolute top-0 left-1/2 translate-x-[-50%] size-[700px]" />
    </section>
  );
};

export default TrustedBy;