import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, ChevronDown, ShoppingBag, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const MOCHA_IMAGE =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/ChatGPT-Image-Mar-7-2026-07_40_25-PM.webp";

export const CartDrawer = () => {
  const {
    isCartOpen,
    closeCart,
    items,
    totalItems,
    addItem,
    updateQuantity,
    removeItem,
  } = useCart();
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleQuickAdd = () => {
    addItem({
      id: "ignite-coffee-7pack",
      name: "Ignite Protein Functional Coffee (Pack of 7)",
      flavor: "Mocha",
      quantity: 1,
      price: 24.99,
    });
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[70] shadow-2xl flex flex-col font-sans"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-[15px] font-medium text-gray-900">
                Cart ({totalItems})
              </h2>
              <button
                onClick={closeCart}
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto flex flex-col">
              {items.length === 0 ? (
                // Empty State
                <div className="flex-1 flex flex-col p-6">
                  <div className="flex-1 flex flex-col justify-center max-w-[320px] mx-auto w-full">
                    <p className="text-center text-[15px] text-gray-900 mb-8">
                      Your Cart is Empty
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <Link
                        to="/"
                        onClick={closeCart}
                        className="border border-black rounded-full py-2.5 text-center text-[13px] font-medium text-black hover:bg-black hover:text-white transition-colors"
                      >
                        Home
                      </Link>
                      <Link
                        to="/shop"
                        onClick={closeCart}
                        className="border border-black rounded-full py-2.5 text-center text-[13px] font-medium text-black hover:bg-black hover:text-white transition-colors"
                      >
                        Catalog
                      </Link>
                    </div>
                    <Link
                      to="/contact"
                      onClick={closeCart}
                      className="border border-black rounded-full py-2.5 text-center text-[13px] font-medium text-black hover:bg-black hover:text-white transition-colors block w-full mb-12"
                    >
                      Contact
                    </Link>

                    {/* Recommended Product */}
                    <div className="bg-[#f9f9f9] p-4 flex relative items-center group">
                      <div className="w-20 h-20 bg-[#ebebeb] flex-shrink-0 p-2">
                        <img
                          src={MOCHA_IMAGE}
                          alt="Ignite Coffee"
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      </div>
                      <div className="ml-4 pr-8">
                        <h4 className="text-[13px] font-medium text-gray-900 leading-snug">
                          Ignite Protein Functional Coffee (Pack of 7)
                        </h4>
                        <div className="flex items-center mt-1.5 space-x-2">
                          <span className="text-[12px] font-medium text-gray-900">
                            $24.99
                          </span>
                          <span className="text-[12px] text-gray-500 line-through">
                            $29.99
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={handleQuickAdd}
                        className="absolute bottom-4 right-4 text-gray-900 hover:text-orange-600 transition-colors flex items-center justify-center"
                      >
                        <div className="relative">
                          <ShoppingBag size={20} strokeWidth={1.5} />
                          <Plus
                            size={10}
                            strokeWidth={3}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[2px]"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Filled State
                <div className="flex flex-col h-full">
                  {/* Free Shipping Bar */}
                  <div className="px-6 py-4 border-b border-gray-200">
                    <p className="text-[12px] text-gray-900 mb-2.5">
                      Congratulations! Your order qualifies for free shipping
                    </p>
                    <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-black w-full"></div>
                    </div>
                  </div>

                  {/* Items List */}
                  <div className="px-6 flex-1">
                    {items.map((item, index) => (
                      <div
                        key={`${item.id}-${item.flavor}-${index}`}
                        className="flex py-6 border-b border-gray-200"
                      >
                        <div className="w-24 h-24 bg-[#ebebeb] flex-shrink-0 p-2">
                          <img
                            src={
                              item.flavor === "Mocha"
                                ? MOCHA_IMAGE
                                : item.flavor === "Hazelnut"
                                  ? "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/ChatGPT-Image-Mar-7-2026-08_17_58-PM.webp"
                                  : "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/ChatGPT-Image-Mar-7-2026-07_43_39-PM.webp"
                            }
                            alt={item.name}
                            className="w-full h-full object-contain mix-blend-multiply"
                          />
                        </div>
                        <div className="ml-4 flex-1 flex flex-col">
                          <div className="flex justify-between items-start">
                            <h4 className="text-[13px] font-medium text-gray-900 leading-snug pr-4">
                              {item.name}
                            </h4>
                            <span className="text-[13px] font-medium text-gray-900 whitespace-nowrap">
                              ${item.price.toFixed(2)}
                            </span>
                          </div>

                          <p className="text-[12px] text-gray-600 mt-1.5">
                            <span className="font-medium text-gray-900">
                              Flavor:
                            </span>{" "}
                            {item.flavor}
                          </p>

                          <div className="flex items-center mt-1 space-x-2">
                            <span className="text-[12px] text-gray-900">
                              ${item.price.toFixed(2)}
                            </span>
                            <span className="text-[12px] text-gray-500 line-through">
                              ${(item.price + 5).toFixed(2)}
                            </span>
                          </div>

                          <div className="mt-3">
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
                                className="appearance-none border border-gray-300 rounded-full pl-4 pr-10 py-1 text-[12px] font-medium bg-white focus:outline-none focus:border-black cursor-pointer"
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

                          <button
                            onClick={() => removeItem(item.id, item.flavor)}
                            className="text-[10px] tracking-wider uppercase text-gray-600 hover:text-black mt-3 text-left w-max font-medium"
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    ))}

                    {/* Gift Accordion */}
                    <button
                      onClick={() => setIsGiftOpen(!isGiftOpen)}
                      className="w-full py-4 flex justify-between items-center border-b border-gray-200 text-left"
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
                          <div className="py-4 text-[13px] text-gray-600">
                            Gift wrapping and messaging options will be
                            available during checkout.
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer */}
                  <div className="p-6 bg-white mt-auto">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[13px] font-medium tracking-wider uppercase text-gray-900">
                        SUBTOTAL
                      </span>
                      <span className="text-[17px] font-medium text-gray-900">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>

                    <Link
                      to="/checkout"
                      onClick={closeCart}
                      className="w-full bg-black text-white rounded-full py-3.5 flex justify-center items-center text-[14px] font-bold mb-3 hover:bg-gray-800 transition-colors"
                    >
                      <Lock size={16} className="mr-2" strokeWidth={2} /> Check
                      Out
                    </Link>

                    <Link
                      to="/cart"
                      onClick={closeCart}
                      className="w-full bg-white text-black border border-black rounded-full py-3.5 flex justify-center items-center text-[14px] font-bold mb-4 hover:bg-gray-50 transition-colors"
                    >
                      View cart
                    </Link>

                    <p className="text-center text-[11px] text-gray-500 italic">
                      Shipping, taxes, and discount codes are calculated at
                      checkout
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

