import React from 'react';

const items = [
  "10g Protein",
  "70mg Caffeine",
  "70mg L-Theanine",
  "< 53 Calories per sachet",
  "100% Arabica",
  "Zero Sugar",
  "Cafe-style taste"
];

export const ProductMarquee = () => {
  // Triple the items for smooth infinite scroll
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="bg-[#ea580c] text-white py-3 overflow-hidden relative z-20 border-y border-[#ea580c]">
      <div className="flex whitespace-nowrap animate-marquee w-max items-center">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="mx-6 font-semibold text-sm tracking-wide">
              {item}
            </span>
            <span className="text-white/80 font-black italic tracking-tighter text-lg">
              ////
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
