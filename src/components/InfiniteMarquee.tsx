import React from "react";
import marqueeIcon from "../assets/InfiniteMarq/image.png"; // adjust path as needed

const InfiniteMarquee: React.FC = () => {
  const content: string[] = [
    "Quality Product",
    "Shipping Across India",
    "Quality Product",
    "Shipping Across India",
    "Quality Product",
    "Shipping Across India",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#e5f1fd] rotate-[-3deg]">
      <div className="animate-marquee whitespace-nowrap flex gap-8 py-8">
        {content.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 text-navy-900 text-base font-medium"
          >
                 <img src={marqueeIcon} alt="icon" className="w-20 h-8 ml-10" />
            <h3 className="text-3xl px-4">{item}</h3>
          </div>
        ))}
        {content.map((item, idx) => (
          <div
            key={`dup-${idx}`}
            className="flex items-center gap-2 text-navy-900 text-base font-medium"
          >
            <img src={marqueeIcon} alt="icon" className="w-32 h-8" />
            <h3 className="text-3xl px-4">{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
