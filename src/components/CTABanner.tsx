import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const CTABanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-70"
        style={{
          backgroundImage:
            "url(https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/ChatGPT-Image-Mar-7-2026-01_57_48-PM.webp)",
        }}
      />

      <div className="absolute inset-0 bg-black/30" />

      {/* Marquee Headline */}
      <div className="relative z-10 w-full overflow-hidden whitespace-nowrap mb-6">
        <div className="inline-block animate-marquee w-max">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-white font-heading font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter uppercase mx-4 opacity-90"
            >
              THE FUTURE OF COFFEE IS HERE
            </span>
          ))}
        </div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white font-semibold text-sm md:text-base tracking-[0.2em] uppercase mb-8 max-w-2xl"
        >
          High performance coffee for focus, energy, and momentum
        </motion.p>

        <motion.button
          onClick={() => navigate("/shop")}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white text-black px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-xl"
        >
          Shop Ignite &gt;
        </motion.button>
      </div>
    </section>
  );
};

