import React from 'react';
import { Flame } from 'lucide-react';

const tickerItems = [
  "Clean Energy Coffee",
  "10g Protein Blend",
  "No Crash Focus",
  "Performance Coffee",
  "Fuel Your Potential",
  "Zero Sugar Energy"
];

export const FooterTicker = () => {
  const items = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="bg-[#E65100] text-white py-4 overflow-hidden relative z-20">
      <div className="flex whitespace-nowrap animate-marquee w-max items-center">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="mx-8 font-medium text-sm md:text-base tracking-wider uppercase">
              {item}
            </span>
            <Flame size={16} className="text-white/80 fill-white/80" />
          </div>
        ))}
      </div>
    </div>
  );
};
