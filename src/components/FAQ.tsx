import React from 'react';
import { motion } from 'framer-motion';
import { Accordion } from './ui/Accordion';

const faqs = [
  { q: "What does it taste like?", a: "Ignite Protein Coffee tastes just like a premium cafe-style latte. It's rich, creamy, and perfectly balanced without any chalky protein aftertaste or artificial sweetness." },
  { q: "How are we different?", a: "Unlike regular coffee that can cause jitters and crashes, or traditional protein shakes that feel heavy, Ignite combines 100% Arabica coffee with premium protein and L-Theanine for calm, sustained energy." },
  { q: "Protein in coffee? Really?", a: "Yes! We've formulated a specialized blend of whey and pea protein that dissolves seamlessly into our coffee extract, giving you 10g of functional fuel in every cup." },
  { q: "When can I have it?", a: "It's perfect for your morning routine, as a pre-workout energy boost, or during deep work sessions when you need sustained focus without the crash." },
  { q: "How much caffeine is in it?", a: "Each serving contains approximately 70mg of caffeine, which is equivalent to a standard shot of espresso." },
  { q: "Is it okay for daily use?", a: "Absolutely. Ignite is designed to be a healthy upgrade to your daily coffee ritual." },
  { q: "What's the calorie count?", a: "Each sachet contains under 60 calories, making it a perfectly lean addition to your daily nutrition." },
  { q: "How is it different to a protein shake?", a: "It's much lighter, mixes instantly with water or milk, and provides the functional benefits of caffeine and L-Theanine for energy and focus, rather than just muscle recovery." }
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6 animate-blur-in">
              FAQs
            </h2>
            <p className="text-gray-800 text-[15px] leading-relaxed">
              If you can't find the answers to your questions drop us a line at <a href="mailto:hi@ignitefuel.com" className="font-bold text-black hover:text-orange-600 transition-colors">hi@ignitefuel.com</a> and we'll help :)
            </p>
          </motion.div>

          {/* Right Column: Accordions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 border-t border-gray-300"
          >
            {faqs.map((faq, index) => (
              <Accordion 
                key={index} 
                title={faq.q} 
                iconType="plus"
                titleClassName="font-bold text-[17px] text-gray-900 py-1"
              >
                {faq.a}
              </Accordion>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
