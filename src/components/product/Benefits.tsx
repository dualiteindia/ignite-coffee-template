import React from "react";
import { motion } from "framer-motion";
import { Accordion } from "../ui/Accordion";

const leftBenefits = [
  {
    title: "SUSTAINED ENERGY",
    content:
      "Our unique blend provides a steady release of energy, avoiding the sharp spikes and sudden crashes associated with regular coffee.",
  },
  {
    title: "FOCUS WITHOUT JITTERS",
    content:
      "L-Theanine works synergistically with caffeine to promote a state of calm, alert focus, eliminating anxiety and jitters.",
  },
  {
    title: "FOCUS & CLARITY",
    content:
      "Enhance your cognitive function and mental clarity for deep work sessions and demanding tasks.",
  },
];

const rightBenefits = [
  {
    title: "PROTEIN-POWERED FUEL",
    content:
      "10g of high-quality protein per serving helps support muscle recovery and keeps you feeling full and satisfied.",
  },
  {
    title: "INDULGENT TASTE",
    content:
      "Enjoy the rich, creamy taste of cafe-style coffee without the added sugars or artificial syrups.",
  },
  {
    title: "IMPROVED MOOD",
    content:
      "The combination of premium coffee and functional ingredients helps elevate your mood and overall well-being.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tighter text-gray-900 uppercase mb-4 animate-blur-in">
            YOUR COFFEE, REINVENTED.
          </h2>
          <p className="text-gray-600 text-lg">
            Clean energy, calm focus, and daily fuel — all in one drink.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Accordions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col border-t border-gray-300"
          >
            {leftBenefits.map((benefit, idx) => (
              <Accordion key={idx} title={benefit.title} iconType="plus">
                {benefit.content}
              </Accordion>
            ))}
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            {/* Using a high-quality iced coffee placeholder since it wasn't provided in the prompt links */}
            <img
              src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=compress&fit=crop&q=80&w=600&h=800"
              alt="Iced Ignite Coffee"
              className="w-full max-w-[350px] object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Right Accordions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col border-t border-gray-300"
          >
            {rightBenefits.map((benefit, idx) => (
              <Accordion key={idx} title={benefit.title} iconType="plus">
                {benefit.content}
              </Accordion>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

