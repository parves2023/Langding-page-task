import React from 'react';
import { Shield, Settings, Zap } from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Unmatched Durability with Corrosion-Free Technology",
      description: "Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against corrosion. Crafted with high-quality stainless steel blending wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability."
    },
    {
      icon: Settings,
      title: "Customer-Centric Approach",
      description: "At JF Products, customer satisfaction is paramount. We pride ourselves on delivering high-quality products, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in our valued clients."
    },
    {
      icon: Zap,
      title: "Innovative and Diverse Product Range",
      description: "We offer easy fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to your needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We specialize in delivering durable and innovative fencing solutions built to last.
            With a focus on quality and trust, we help secure spaces across industries and
            communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`mx-auto mb-6 w-20 h-20 rounded-2xl flex items-center justify-center ${
                index === 1 ? 'bg-navy-900' : 'bg-blue-100'
              }`}>
                <feature.icon className={`w-8 h-8 ${
                  index === 1 ? 'text-white' : 'text-navy-600'
                }`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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