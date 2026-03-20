import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { CheckCircle2, Search, Lock } from "lucide-react";
import { Logo } from "../components/ui/Logo";

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

export const CheckoutPage = () => {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [billingAddress, setBillingAddress] = useState("same");

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const taxes = subtotal * 0.08; // 8% dummy tax
  const total = subtotal + taxes;

  useEffect(() => {
    if (isConfirmed) {
      const timer = setTimeout(() => {
        clearCart();
        navigate("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isConfirmed, navigate, clearCart]);

  const handlePayNow = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  // Order Confirmation Overlay
  if (isConfirmed) {
    return (
      <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 size={40} className="text-green-600" />
          </motion.div>
          <h2 className="font-heading font-bold text-3xl text-gray-900 mb-2 animate-blur-in">
            Order Confirmed
          </h2>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your Ignite coffee is on the way.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 text-left mb-8">
            <p className="text-sm text-gray-500 mb-1">Order Number</p>
            <p className="font-medium text-gray-900 mb-4">
              #IGN-{Math.floor(100000 + Math.random() * 900000)}
            </p>

            <p className="text-sm text-gray-500 mb-1">Total Paid</p>
            <p className="font-medium text-gray-900 mb-4">
              ${total.toFixed(2)}
            </p>

            <p className="text-sm text-gray-500 mb-1">Delivery Estimate</p>
            <p className="font-medium text-gray-900">3-5 Business Days</p>
          </div>

          <p className="text-sm text-gray-400 animate-pulse">
            Redirecting to home...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans animate-blur-in">
      {/* Left Column: Form */}
      <div className="flex-1 lg:w-[55%] xl:w-[60%] bg-white px-4 py-8 lg:px-16 xl:px-24 lg:py-12 border-r border-gray-200">
        <div className="max-w-xl ml-auto lg:mx-0">
          {/* Logo */}
          <Link to="/" className="flex items-center mb-8">
            <Logo variant="dark" className="h-8" />
          </Link>

          <form onSubmit={handlePayNow} className="space-y-8">
            {/* Contact */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900 animate-blur-in">
                  Contact
                </h2>
                <Link
                  to="/signin"
                  className="text-sm text-[#1773B0] hover:underline"
                >
                  Sign in
                </Link>
              </div>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0] outline-none transition-all"
              />
            </section>

            {/* Delivery */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 animate-blur-in">
                Delivery
              </h2>
              <div className="space-y-3">
                <select className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0] outline-none transition-all bg-white">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First name (optional)"
                    className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0] outline-none transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0] outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0] outline-none transition-all"
                  />
                  <Search
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0] outline-none transition-all"
                />

                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0] outline-none transition-all"
                  />
                  <select className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0] outline-none transition-all bg-white">
                    <option>State</option>
                    <option>CA</option>
                    <option>NY</option>
                    <option>TX</option>
                  </select>
                  <input
                    type="text"
                    placeholder="ZIP code"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0] outline-none transition-all"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0] outline-none transition-all"
                />

                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="w-4 h-4 text-[#1773B0] border-gray-300 rounded focus:ring-[#1773B0]"
                  />
                  <label
                    htmlFor="save-info"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Save this information for next time
                  </label>
                </div>
              </div>
            </section>

            {/* Shipping Method */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 animate-blur-in">
                Shipping method
              </h2>
              <div className="bg-gray-50 border border-gray-200 rounded-md p-4 text-center text-sm text-gray-500">
                Enter your shipping address to view available shipping methods.
              </div>
            </section>

            {/* Payment */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-1 animate-blur-in">
                Payment
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                All transactions are secure and encrypted.
              </p>

              <div className="border border-gray-300 rounded-md overflow-hidden">
                {/* Credit Card Option */}
                <label
                  className={`flex items-center p-4 border-b border-gray-200 cursor-pointer ${paymentMethod === "credit" ? "bg-[#f4f8fb]" : "bg-white"}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="credit"
                    checked={paymentMethod === "credit"}
                    onChange={() => setPaymentMethod("credit")}
                    className="w-4 h-4 text-[#1773B0] border-gray-300 focus:ring-[#1773B0]"
                  />
                  <span className="ml-3 text-sm font-medium text-gray-900 flex-1">
                    Credit/Debit Card
                  </span>
                  <div className="flex space-x-1">
                    <div className="w-8 h-5 bg-gray-200 rounded text-[8px] flex items-center justify-center font-bold text-gray-600">
                      VISA
                    </div>
                    <div className="w-8 h-5 bg-gray-200 rounded text-[8px] flex items-center justify-center font-bold text-gray-600">
                      MC
                    </div>
                    <div className="w-8 h-5 bg-gray-200 rounded text-[8px] flex items-center justify-center font-bold text-gray-600">
                      AMEX
                    </div>
                  </div>
                </label>

                {paymentMethod === "credit" && (
                  <div className="p-4 bg-[#f4f8fb] border-b border-gray-200 flex flex-col items-center justify-center text-center">
                    <Lock size={24} className="text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">
                      You will be redirected to our secure payment gateway to
                      complete your purchase.
                    </p>
                  </div>
                )}

                {/* Other Options */}
                {["Apple Pay", "Google Pay", "PayPal"].map((method, idx) => (
                  <label
                    key={method}
                    className={`flex items-center p-4 cursor-pointer ${idx !== 2 ? "border-b border-gray-200" : ""} ${paymentMethod === method ? "bg-[#f4f8fb]" : "bg-white"}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                      className="w-4 h-4 text-[#1773B0] border-gray-300 focus:ring-[#1773B0]"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-900">
                      {method}
                    </span>
                  </label>
                ))}
              </div>
            </section>

            {/* Billing Address */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 animate-blur-in">
                Billing address
              </h2>
              <div className="border border-gray-300 rounded-md overflow-hidden bg-white">
                <label
                  className={`flex items-center p-4 border-b border-gray-200 cursor-pointer ${billingAddress === "same" ? "bg-[#f4f8fb]" : "bg-white"}`}
                >
                  <input
                    type="radio"
                    name="billing"
                    value="same"
                    checked={billingAddress === "same"}
                    onChange={() => setBillingAddress("same")}
                    className="w-4 h-4 text-[#1773B0] border-gray-300 focus:ring-[#1773B0]"
                  />
                  <span className="ml-3 text-sm text-gray-900">
                    Same as shipping address
                  </span>
                </label>
                <label
                  className={`flex items-center p-4 cursor-pointer ${billingAddress === "different" ? "bg-[#f4f8fb]" : "bg-white"}`}
                >
                  <input
                    type="radio"
                    name="billing"
                    value="different"
                    checked={billingAddress === "different"}
                    onChange={() => setBillingAddress("different")}
                    className="w-4 h-4 text-[#1773B0] border-gray-300 focus:ring-[#1773B0]"
                  />
                  <span className="ml-3 text-sm text-gray-900">
                    Use a different billing address
                  </span>
                </label>
              </div>
            </section>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1773B0] hover:bg-[#125d8f] text-white rounded-md py-4 text-[15px] font-semibold transition-colors mt-4 shadow-sm"
            >
              Pay now
            </button>

            {/* Footer Links */}
            <div className="flex space-x-4 text-[12px] text-[#1773B0] pt-4 border-t border-gray-200">
              <a href="#" className="hover:underline">
                Refund policy
              </a>
              <a href="#" className="hover:underline">
                Shipping
              </a>
              <a href="#" className="hover:underline">
                Privacy policy
              </a>
              <a href="#" className="hover:underline">
                Terms of service
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column: Order Summary */}
      <div className="w-full lg:w-[45%] xl:w-[40%] bg-[#fafafa] px-4 py-8 lg:px-12 lg:py-12">
        <div className="max-w-md lg:mx-0">
          {/* Items */}
          <div className="space-y-4 mb-6">
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="relative w-16 h-16 bg-white border border-gray-200 rounded-md p-1.5 flex-shrink-0">
                  <img
                    src={getImageForFlavor(item.flavor)}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {item.quantity}
                  </span>
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="text-[13px] font-medium text-gray-900 leading-snug">
                    {item.name}
                  </h4>
                  <p className="text-[12px] text-gray-500 mt-0.5">
                    {item.flavor}
                  </p>
                </div>
                <div className="ml-4 text-[13px] font-medium text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Discount Code */}
          <div className="flex space-x-3 mb-6 border-y border-gray-200 py-6">
            <input
              type="text"
              placeholder="Discount code"
              className="flex-1 border border-gray-300 rounded-md px-3 py-3 text-sm focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0] outline-none transition-all bg-white"
            />
            <button
              type="button"
              className="bg-gray-200 text-gray-500 px-6 py-3 rounded-md text-sm font-medium"
            >
              Apply
            </button>
          </div>

          {/* Totals */}
          <div className="space-y-3 text-[14px]">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="text-gray-900 font-medium">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span className="flex items-center">
                Shipping{" "}
                <span className="ml-1 w-4 h-4 rounded-full border border-gray-300 text-[10px] flex items-center justify-center text-gray-400">
                  ?
                </span>
              </span>
              <span className="text-gray-500 text-[12px]">
                Enter shipping address
              </span>
            </div>
            <div className="flex justify-between items-center pt-3 mt-3 border-t border-gray-200">
              <span className="text-base font-semibold text-gray-900">
                Total
              </span>
              <div className="text-right">
                <span className="text-xs text-gray-500 mr-2">USD</span>
                <span className="text-xl font-semibold text-gray-900">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-gray-500">
              Including ${taxes.toFixed(2)} in taxes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

