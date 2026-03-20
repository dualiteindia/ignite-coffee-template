import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    video:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/jenny_hu/From-KlickPin-CF-gym-fitness-workout-aesthetic-health-Dm-for-credit-_-Tatuaggi-maschili-Allenamento-Celebrit-1.webm",
    title: "FOR MORNINGS OR PRE-WORKOUT",
    text: "Clean energy coffee to start your day strong, move better, and feel steady.",
  },
  {
    video:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/jenny_hu/From-KlickPin-CF-Steph-on-Instagram-Budgeting-level-Expert-Step-1-Open-laptop-Step-2-Sip-iced-coffee-Step-3-Pretend-to-be-organized-while-my-cat-judges-me-from-acr-Video-Video-_-Comp.webm",
    title: "FOR DEEP WORK & FOCUS",
    text: "Sustained energy for productivity and creativity. No jitters, no crash.",
  },
  {
    video:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/jenny_hu/From-KlickPin-CF-Creamed-ice-Coffee-mix-Video-_-Coffee-shop-photography-How-to-make-coffee-Coffee-shop-1.webm",
    title: "INDULGENCE WITHOUT THE GUILT",
    text: "Great taste with protein and low sugar. Your favorite iced-coffee taste upgraded.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl uppercase tracking-tighter text-gray-900 animate-blur-in">
            THE COFFEE YOU DESERVE
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col text-center group"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-100">
                <video
                  src={feature.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium text-sm px-4">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

