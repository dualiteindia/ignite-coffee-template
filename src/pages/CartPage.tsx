import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ChevronDown, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MOCHA_IMAGE =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/ChatGPT-Image-Mar-7-2026-07_40_25-PM.webp";
const HAZELNUT_IMAGE =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/ChatGPT-Image-Mar-7-2026-08_17_58-PM.webp";
const ASSORTED_IMAGE =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/ChatGPT-Image-Mar-7-2026-07_43_39-PM.webp";

const getImageForFlavor = (flavor: string) => {
  if (flavor === "Hazelnut") return HAZELNUT_IMAGE;
  if (flavor === "Assorted") return ASSORTED_IMAGE;
  return MOCHA_IMAGE;
};

export const CartPage = () => {
  const { items, totalItems, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <main className="min-h-[70vh] pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center bg-white animate-blur-in">
        <h1 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter text-gray-900 mb-6 animate-blur-in">
          Your Cart is Empty
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Looks like you haven't added any fuel to your cart yet.
        </p>
        <Link
          to="/shop"
          className="bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-24 bg-white min-h-screen animate-blur-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end border-b border-black pb-4 mb-10">
          <h1 className="text-[15px] font-medium text-gray-900 uppercase tracking-wider animate-blur-in">
            CART ({totalItems})
          </h1>
          <Link
            to="/"
            className="border border-black rounded-full px-6 py-2 text-[13px] font-bold text-black hover:bg-black hover:text-white transition-colors"
          >
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Cart Items */}
          <div className="lg:col-span-8">
            {items.map((item, index) => (
              <div
                key={`${item.id}-${item.flavor}-${index}`}
                className="flex py-6 border-b border-gray-200"
              >
                <div className="w-28 h-28 bg-[#ebebeb] flex-shrink-0 p-2">
                  <img
                    src={getImageForFlavor(item.flavor)}
                    alt={item.name}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>

                <div className="ml-6 flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[14px] font-medium text-gray-900 leading-snug max-w-[280px]">
                        {item.name}
                      </h4>
                      <p className="text-[13px] text-gray-600 mt-1">
                        <span className="font-medium text-gray-900">
                          Flavor:
                        </span>{" "}
                        {item.flavor}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[14px] font-medium text-gray-900 block">
                        ${item.price.toFixed(2)}
                      </span>
                      <span className="text-[12px] text-gray-500 line-through">
                        ${(item.price + 5).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-end mt-4">
                    <button
                      onClick={() => removeItem(item.id, item.flavor)}
                      className="text-[11px] tracking-wider uppercase text-gray-500 hover:text-black font-medium"
                    >
                      REMOVE
                    </button>

                    <div className="relative inline-block">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            item.id,
                            item.flavor,
                            parseInt(e.target.value),
                          )
                        }
                        className="appearance-none border border-gray-300 rounded-full pl-4 pr-10 py-1.5 text-[13px] font-medium bg-white focus:outline-none focus:border-black cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={14}
                        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Summary */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              {/* Free Shipping Notice */}
              <div className="mb-8">
                <p className="text-[13px] text-gray-900 mb-3">
                  Congratulations! Your order qualifies for free shipping
                </p>
                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-black w-full"></div>
                </div>
              </div>

              {/* Subtotal */}
              <div className="flex justify-between items-center border-t border-black pt-4 mb-4">
                <span className="text-[13px] font-medium tracking-wider uppercase text-gray-900">
                  SUBTOTAL
                </span>
                <span className="text-[18px] font-medium text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              {/* Gift Accordion */}
              <div className="border-b border-gray-200 mb-6">
                <button
                  onClick={() => setIsGiftOpen(!isGiftOpen)}
                  className="w-full py-4 flex justify-between items-center text-left"
                >
                  <span className="text-[13px] text-gray-900">
                    Is this a gift?
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-gray-500 transition-transform duration-300 ${isGiftOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isGiftOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 text-[13px] text-gray-600">
                        Gift wrapping and messaging options will be available
                        during checkout.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-[#0a0a0a] text-white rounded-full py-4 flex justify-center items-center text-[14px] font-bold mb-4 hover:bg-gray-800 transition-colors shadow-md"
              >
                <Lock size={16} className="mr-2" strokeWidth={2} /> Check Out
              </button>

              <p className="text-[11px] text-gray-500 italic leading-relaxed">
                Shipping, taxes, and discount codes are calculated at checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

