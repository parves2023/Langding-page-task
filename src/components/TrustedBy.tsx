import React from 'react';
import { Award, Star, Truck } from 'lucide-react';

const TrustedBy = () => {
  const stats = [
    {
      icon: Award,
      title: "Premium",
      subtitle: "Products",
    },
    {
      icon: Star,
      value: "4000+",
      title: "Google Review",
    },
    {
      icon: Truck,
      title: "Delivery",
      subtitle: "Across India",
    },
  ];

  return (
    <section className="py-16 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by over 6K+ customers
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-center space-x-4">
              <div className="bg-white rounded-full p-4">
                <stat.icon className="w-8 h-8 text-navy-600" />
              </div>
              <div className="text-white">
                {stat.value && (
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                )}
                <div className="font-semibold">{stat.title}</div>
                {stat.subtitle && (
                  <div className="text-sm opacity-80">{stat.subtitle}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;