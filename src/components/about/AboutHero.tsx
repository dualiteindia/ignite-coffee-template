import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const AboutHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage:
            "url(https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/Screenshot-2026-03-07-195602.webp)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Background Marquee Text */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none z-0">
        <div className="flex whitespace-nowrap animate-marquee w-max opacity-40">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[12vw] md:text-[10vw] font-heading font-black text-[#d4c5b0] uppercase tracking-tighter mx-4 select-none"
            >
              EMBRACE YOUR POTENTIAL
            </span>
          ))}
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#e8e4d9] text-sm md:text-base font-medium leading-relaxed max-w-3xl mb-10"
        >
          At Ignite, we believe every day is an opportunity to unlock more of
          what you're capable of. We've reimagined the morning ritual—merging
          clean caffeine, muscle-building protein, and focus-boosting nootropics
          into one effortless scoop. From your first sunrise draft to the final
          evening stretch, we're here to fuel your body, sharpen your mind, and
          build momentum for whatever comes next.
        </motion.p>

        <motion.button
          onClick={() => navigate("/shop")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#e8e4d9] text-black px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors flex items-center space-x-2"
        >
          <span>Unlock Now</span>
          <span className="text-lg leading-none mb-0.5">›</span>
        </motion.button>
      </div>
    </section>
  );
};

