import React from 'react';
import { motion } from 'framer-motion';

const features = [
  "10G PROTEIN,\nIN EVERY CUP",
  "CALM FOCUS,\nNO CAFFEINE CRASH",
  "NO ACIDITY,\nNO BLOATING",
  "CAFE-STYLE COFFEE,\nREADY IN 10 SEC"
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.7, ease: "easeInOut" }
  }
};

export const FeatureBanner = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: 'url(https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/jenny_hu/ChatGPT-Image-Mar-7-2026-07_39_12-PM.webp)',
        }}
      />
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center"
        >
          {features.map((text, index) => (
            <motion.div key={index} variants={textVariants} className="flex items-center justify-center h-full">
              <h3 className="font-heading font-bold text-xl md:text-2xl text-white uppercase tracking-wider whitespace-pre-line leading-snug">
                {text}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
