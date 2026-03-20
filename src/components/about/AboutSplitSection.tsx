import React from 'react';
import { motion } from 'framer-motion';

interface ListItem {
  title: string;
  text: string;
}

interface AboutSplitSectionProps {
  title: string;
  items: ListItem[];
  image: string;
  imagePosition: 'left' | 'right';
}

export const AboutSplitSection = ({ title, items, image, imagePosition }: AboutSplitSectionProps) => {
  const TextContent = () => (
    <motion.div 
      initial={{ opacity: 0, x: imagePosition === 'right' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0"
    >
      <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter text-gray-900 mb-8 pb-4 border-b border-gray-300 inline-block w-full animate-blur-in">
        {title}
      </h2>
      <ul className="space-y-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-3 mt-1.5 text-[8px] text-gray-900">●</span>
            <p className="text-gray-800 text-[15px] leading-relaxed">
              <strong className="text-gray-900 font-bold">{item.title}</strong> {item.text}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  const ImageContent = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full h-full min-h-[400px] lg:min-h-[600px] rounded-sm overflow-hidden"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
    </motion.div>
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {imagePosition === 'right' ? (
            <>
              <TextContent />
              <ImageContent />
            </>
          ) : (
            <>
              <div className="order-2 lg:order-1">
                <ImageContent />
              </div>
              <div className="order-1 lg:order-2">
                <TextContent />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
