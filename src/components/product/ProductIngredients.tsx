import React from "react";
import { motion } from "framer-motion";

const ingredients = [
  {
    image:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/Arabica.webp",
  },
  {
    image:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/Whey.webp",
  },
  {
    image:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/L-theanine_be41c2d9-9595-414b-b6d5-1a619912a7b8.webp",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const ProductIngredients = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {ingredients.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/5] overflow-hidden flex items-center justify-center">
                <img
                  src={item.image}
                  alt={`Ingredient ${index + 1}`}
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

