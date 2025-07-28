import React, { useState } from "react";
import quaticon from "../assets/Why Customers/quaticon.png";
import img1 from "../assets/Why Customers/image1.png";
import imagenamebg from "../assets/Why Customers/imagenamebg.png";
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from "react-icons/lia";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Samuel Varughese",
      text: "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
      image: img1,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      text: "Excellent quality products and outstanding customer service. The installation was smooth and the team was very professional. Highly recommend JF Products for all fencing needs.",
      image: img1,
    },
    {
      id: 3,
      name: "Priya Sharma",
      text: "Outstanding durability and weather resistance. After 2 years, the fencing still looks as good as new. Great investment for our agricultural property.",
     image: img1,
    },
  ];

  const changeTestimonial = (newIndex : number) => {
    if (isTransitioning || newIndex === currentTestimonial) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial(newIndex);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const nextTestimonial = () => {
    const newIndex = (currentTestimonial + 1) % testimonials.length;
    changeTestimonial(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex =
      (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    changeTestimonial(newIndex);
  };

  return (
    <section className="py-16 font-poppins">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium text-gray-900 mb-4">
            Why Customers Love <span className="text-gray-900">Us?</span>
          </h2>
        </div>

        {/* Main testimonial container */}
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div className="relative">
            {/* Sliding container */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center px-4">



                    {/* Left side - Text content */}
                    <div className="bg-[#f2f4f6] flex flex-col justify-between h-full rounded-lg p-8 col-span-3  relative">
                  <div>
                        {/* Large quote icon */}
                      <div className="text-6xl text-green-500 font-bold mb-4 leading-none flex gap-1 w-8">
                        <img src={quaticon} alt="" />
                        <img src={quaticon} alt="" />
                      </div>

                      {/* Testimonial text */}
                      <blockquote className="text-2xl leading-relaxed mb-6">
                        {testimonial.text}
                      </blockquote>
                  </div>

                      {/* Author and navigation */}
<div
  className="flex items-center justify-between p-4 bg-cover bg-center rounded-lg"
  style={{
    backgroundImage: `url(${imagenamebg})`,
  }}
>
  <span className="font-semibold text-3xl px-4 py-2 rounded">
    - {testimonial.name}
  </span>

  {/* Navigation buttons - only show on current slide */}
  {index === currentTestimonial && (
    <div className="flex space-x-2">
      <button
        onClick={prevTestimonial}
        disabled={isTransitioning}
        className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 ease-in-out hover:border-gray-400 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <LiaLongArrowAltLeftSolid className="w-5 h-5 text-gray-600" />
      </button>
      <button
        onClick={nextTestimonial}
        disabled={isTransitioning}
        className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 ease-in-out hover:border-gray-400 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <LiaLongArrowAltRightSolid className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  )}
</div>



                    </div>



                    {/* Right side - Image */}
                    <div className="relative col-span-1">
                      <div className="border-[1rem] border-[#f2f4f6]  bg-[#f2f4f6] rounded-3xl ">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full  object-cover rounded-3xl"
                        />

                        {/* JF logo overlay - positioned in top right */}
                        
                      </div>
                    </div>


                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>




      </div>
    </section>
  );
};

export default Testimonials;
