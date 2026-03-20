import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { Accordion } from "../ui/Accordion";
import { clsx } from "clsx";

const FLAVORS = {
  Mocha:
    "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/ChatGPT-Image-Mar-7-2026-07_40_25-PM.webp",
  Hazelnut:
    "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/ChatGPT-Image-Mar-7-2026-08_17_58-PM.webp",
  Assorted:
    "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/ChatGPT-Image-Mar-7-2026-07_43_39-PM.webp",
};

type FlavorType = keyof typeof FLAVORS;

const tagsRow1 = ["10g Protein", "70mg Caffeine", "0 Sugar", "70mg L-theanine"];
const tagsRow2 = [
  "Calm, sustained focus",
  "Whey + pea blend",
  "Digestive enzymes",
];
const tagsRow3 = [
  "Cafe style taste",
  "100% natural ingredients",
  "100% arabica coffee",
];

export const ProductShowcase = () => {
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorType>("Mocha");
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: "ignite-coffee-7pack",
      name: "Ignite Protein Functional Coffee (Pack Of 7)",
      flavor: selectedFlavor,
      quantity: quantity,
      price: 24.99,
    });
  };

  return (
    <section id="shop" className="pt-24 pb-16 bg-white scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Images */}
          <div className="flex flex-col space-y-4">
            {/* Main Image Container */}
            <div className="relative bg-[#e8e8e8] w-full aspect-[4/5] sm:aspect-square flex flex-col justify-between overflow-hidden">
              <div className="absolute top-6 right-6 text-right z-10">
                <span className="font-heading font-bold text-3xl leading-none block text-gray-800">
                  7
                </span>
                <span className="font-heading font-bold text-xl leading-none block text-gray-800">
                  PACK
                </span>
              </div>

              <div className="flex-grow flex items-center justify-center p-8 relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedFlavor}
                    src={FLAVORS[selectedFlavor]}
                    alt={`Ignite Coffee ${selectedFlavor}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-contain max-h-[80%]"
                  />
                </AnimatePresence>
              </div>

              {/* Flavor Label Bar */}
              <div className="bg-[#c2b29b] px-6 py-4 flex justify-between items-center mx-6 mb-6">
                <span className="font-heading font-bold text-xl uppercase text-gray-900 tracking-wide">
                  {selectedFlavor}
                </span>
                <span className="font-heading font-bold text-lg uppercase text-gray-900 tracking-wide">
                  NATURALLY FLAVOURED
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
              {(Object.keys(FLAVORS) as FlavorType[]).map((flavor) => (
                <button
                  key={flavor}
                  onClick={() => setSelectedFlavor(flavor)}
                  className={clsx(
                    "flex-shrink-0 w-20 h-20 bg-[#e8e8e8] border-2 transition-all",
                    selectedFlavor === flavor
                      ? "border-black"
                      : "border-transparent opacity-70 hover:opacity-100",
                  )}
                >
                  <img
                    src={FLAVORS[flavor]}
                    alt={flavor}
                    className="w-full h-full object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="flex flex-col pt-4">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-gray-900 mb-3 animate-blur-in">
              Ignite Protein Functional Coffee (Pack Of 7)
            </h1>
            <p className="text-gray-800 text-base mb-6 font-medium">
              Clean energy, calm focus, and daily protein—your smarter coffee
              ritual.
            </p>

            {/* Tags */}
            <div className="space-y-4 mb-8">
              <div className="flex flex-wrap gap-2">
                {tagsRow1.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#f0f0f0] text-gray-800 text-sm font-medium px-3 py-1.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="border border-gray-400 text-gray-800 text-sm font-medium px-4 py-1.5 rounded-sm hover:bg-gray-50 transition-colors">
                View All Nutritional Info
              </button>
              <div className="flex flex-wrap gap-2 pt-2">
                {tagsRow2.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#f0f0f0] text-gray-800 text-sm font-medium px-3 py-1.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {tagsRow3.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#f0f0f0] text-gray-800 text-sm font-medium px-3 py-1.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-center space-x-3 mb-1">
              <span className="font-heading font-bold text-3xl text-gray-900">
                $24.99
              </span>
              <span className="text-gray-600 text-sm font-medium">
                ($3.57/cup)
              </span>
              <span className="text-gray-400 text-sm line-through decoration-gray-400 font-medium">
                $29.99
              </span>
              <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                15% OFF
              </span>
            </div>
            <p className="text-gray-600 text-sm italic mb-8 font-medium">
              (Taxes Included)
            </p>

            {/* Flavor Selector */}
            <div className="flex flex-wrap gap-3 mb-8">
              {(Object.keys(FLAVORS) as FlavorType[]).map((flavor) => (
                <button
                  key={flavor}
                  onClick={() => setSelectedFlavor(flavor)}
                  className={clsx(
                    "px-8 py-3 rounded-full font-bold text-sm transition-colors border-2",
                    selectedFlavor === flavor
                      ? "bg-[#2C3E2D] border-[#2C3E2D] text-white"
                      : "bg-white border-gray-900 text-gray-900 hover:bg-gray-50",
                  )}
                >
                  {flavor}
                </button>
              ))}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex space-x-4 mb-12">
              <div className="flex items-center border-2 border-gray-900 rounded-full h-14 w-32">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex-1 h-full flex items-center justify-center text-gray-600 hover:text-black text-xl font-medium"
                >
                  -
                </button>
                <span className="font-bold text-gray-900 w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex-1 h-full flex items-center justify-center text-gray-600 hover:text-black text-xl font-medium"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#E65100] text-white rounded-full h-14 font-bold text-lg hover:bg-[#cc4800] transition-colors shadow-md hover:shadow-lg"
              >
                Order Now
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-gray-900">
              <Accordion title="How to use">
                Tear open a sachet, mix with 200ml of hot or cold water/milk,
                froth or stir well, and enjoy your high-performance coffee.
              </Accordion>
              <Accordion title="Description">
                Ignite Functional Coffee is designed for high performers. We've
                combined premium Arabica coffee with high-quality protein and
                L-Theanine to give you sustained energy without the crash.
              </Accordion>
              <Accordion title="Full Ingredient List">
                Premium Arabica Coffee Extract, Whey Protein Isolate, Pea
                Protein, L-Theanine, Natural Flavors, Digestive Enzyme Blend.
              </Accordion>
              <Accordion title="Nutrition">
                Calories: 53kcal, Protein: 10g, Carbohydrates: 2g, Sugars: 0g,
                Fat: 0.5g.
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
