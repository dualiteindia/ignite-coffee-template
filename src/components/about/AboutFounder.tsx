import React from "react";
import { motion } from "framer-motion";

export const AboutFounder = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:max-w-none rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/ChatGPT-Image-Mar-7-2026-07_51_15-PM.webp"
                alt="Ignite Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0"
          >
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter text-gray-900 mb-4 animate-blur-in">
              THE BIGGER PICTURE
            </h2>
            <hr className="border-t-[1.5px] border-black w-full mb-8" />

            <div className="space-y-6 text-[15px] text-gray-900 leading-relaxed">
              <p>
                Coffee changed the way we work. We believe the{" "}
                <strong>next wave of coffee</strong> is{" "}
                <strong>functional</strong>—coffee that supports focus and
                nutrition without the crash. Protein Focus Coffee is our start.
                From here, we'll build a tight line of{" "}
                <strong>better-for-you energy</strong> options that keep the
                same promise: clean, effective, great-tasting.
              </p>
              <p>
                Coffee has always been about energy. Now it's about{" "}
                <em>more</em>. Ignite represents the{" "}
                <strong>future of coffee</strong> – a daily ritual that fuels
                both mind and body. While legacy energy drinks are sugary and
                loud, and protein powders are heavy and one-dimensional, Ignite
                is crafted for the modern urban achiever:{" "}
                <strong>clean, aspirational, functional coffee</strong> that
                works as hard as you do.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

