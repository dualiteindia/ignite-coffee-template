import React from 'react';
import { motion } from 'framer-motion';
import { PackageOpen, Wand2, CupSoda } from 'lucide-react';

const steps = [
  {
    icon: PackageOpen,
    title: "1. TEAR",
    description: "Tear open a sachet of Ignite Protein Coffee mix and add it to your glass."
  },
  {
    icon: Wand2,
    title: "2. FROTH",
    description: "Pour in ~200 ml water or any milk you prefer, room temp or cold. Froth until smooth and creamy."
  },
  {
    icon: CupSoda,
    title: "3. SIP",
    description: "Drink straight, or over ice for an elevated taste. Smooth energy. No jitters. No crash."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const HowToUse = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold text-4xl md:text-5xl uppercase tracking-tighter text-gray-900 animate-blur-in">
            HOW TO USE
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center">
                <div className="mb-6 text-gray-900">
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-xl uppercase tracking-wider text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium text-sm max-w-[280px]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
