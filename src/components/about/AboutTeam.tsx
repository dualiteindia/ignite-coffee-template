import React from "react";
import { motion } from "framer-motion";

export const AboutTeam = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=compress&fit=crop&q=80&w=2000)",
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter mb-8"
        >
          A NOTE FROM THE TEAM
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-white/90 text-base md:text-lg leading-relaxed font-medium max-w-4xl mx-auto">
            We're a small group of builders who love good coffee, clean labels,
            and long, satisfying work sessions. We didn't set out to make the
            loudest brand—we're trying to make the most <strong>useful</strong>{" "}
            one. If you have feedback, flavour ideas, or want to test new drops,
            write to us. Ignite is a work in progress—just like the people we
            serve.
          </p>

          <p className="text-white/70 text-sm md:text-base italic tracking-wide">
            IGNITE™ — coffee for people who aspire to be 1% better everyday to
            unlock their full potential.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

