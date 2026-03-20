import React from 'react';

const items = [
  "Clean Energy",
  "Protein Coffee",
  "Focus Fuel",
  "Low Sugar",
  "No Crash",
  "High Performance"
];

export const Marquee = () => {
  // Double the items to create a seamless infinite scroll effect
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 overflow-hidden z-20 border-t border-white/10">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="mx-6 font-heading font-semibold text-lg tracking-wider uppercase">
              {item}
            </span>
            <span className="text-orange-500 font-black italic tracking-tighter opacity-80">
              ///
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
