import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface AboutBannerProps {
  heading: string;
  text: React.ReactNode;
  variant: 'green' | 'orange';
}

export const AboutBanner = ({ heading, text, variant }: AboutBannerProps) => {
  return (
    <section className={clsx(
      "py-20 px-4 flex flex-col items-center justify-center text-center",
      variant === 'green' ? "bg-[#3b5336] text-white" : "bg-[#E65100] text-white"
    )}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-6">
          {heading}
        </h2>
        <div className="text-[15px] md:text-[17px] font-medium leading-relaxed opacity-90">
          {text}
        </div>
      </motion.div>
    </section>
  );
};
