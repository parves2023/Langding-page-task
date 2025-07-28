import React from 'react';
import imgbg from "../assets/Why Us/imagebg.png";
import icon1 from "../assets/Why Us/image1.png";
import icon2 from "../assets/Why Us/image2.png";
import icon3 from "../assets/Why Us/image3.png";

const WhyUs = () => {
  const features = [
    {
      icon: icon1,
      title: "Unmatched Durability with Corrosion-Free Technology",
      description:
        "Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against corrosion. Crafted with high-quality stainless steel blending wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.",
    },
    {
      icon: icon2,
      title: "Customer-Centric Approach",
      description:
        "At JF Products, customer satisfaction is paramount. We pride ourselves on delivering high-quality products, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in our valued clients.",
    },
    {
      icon: icon3,
      title: "Innovative and Diverse Product Range",
      description:
        "We offer easy fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to your needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium text-gray-900 mb-4">Why Us</h2>
          <p className="text-[#1A1A1A] text-xl font-normal max-w-[840px] px-16 mx-auto">
            We specialize in delivering durable and innovative fencing solutions built to last. With a focus on quality and trust, we help secure spaces across industries and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative bg-[#f2f4f6] w-[350px] h-[450px] rounded-3xl p-8 flex flex-col items-start text-left overflow-hidden ${
                index === 1 ? 'mt-0 !bg-[#002b55]' : 'mt-12'
              }`}
            >
              {/* Background Image */}
              <img
                src={imgbg}
                alt="Background"
                className="absolute -top-40 -right-[140px] z-0 rounded-tr-3xl size-[400px]"
              />

              {/* Icon */}
              <div
                className={`mb-6 size-16 rounded-2xl flex items-center justify-center z-10 ${
                  index === 1 ? '' : ''
                }`}
              >
                <img
                  src={feature.icon}
                  alt="icon"
                  className={`h-[70px] w-[70px] ${index === 0 && 'h-[70px] !w-12'} ${index === 1 ? 'filter' : ''}`}
                />
              </div>

              {/* Content */}
              <h3 className={`text-xl font-semibold text-gray-900 mb-4 z-10 ${index === 1 ? 'text-white' : ''}`}>
                {feature.title}
              </h3>
              <p className={`text-gray-600 leading-relaxed z-10 ${index === 1 ? 'text-white' : ''}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-accent-400 hover:bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;