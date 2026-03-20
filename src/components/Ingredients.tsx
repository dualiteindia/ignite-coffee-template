import React from "react";
import { motion } from "framer-motion";

const ingredients = [
  {
    id: 1,
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/jenny_hu/Arabica.webp",
    alt: "Arabica Coffee Ingredient",
  },
  {
    id: 2,
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/jenny_hu/Whey.webp",
    alt: "Protein Blend Ingredient",
  },
  {
    id: 3,
    src: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/jenny_hu/L-theanine_be41c2d9-9595-414b-b6d5-1a619912a7b8.webp",
    alt: "L-Theanine Ingredient",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const Ingredients = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold text-4xl md:text-5xl uppercase tracking-tighter text-gray-900 animate-blur-in">
            ENERGY, NUTRITION AND FOCUS IN A SACHET.
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {ingredients.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <div className="w-full aspect-[4/5] relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

