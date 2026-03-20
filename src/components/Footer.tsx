import React from "react";
import { Instagram, Twitter, Youtube, ChevronRight } from "lucide-react";
import { Logo } from "./ui/Logo";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-24">
          {/* Left Column: Logo & Business Info */}
          <div className="flex flex-col">
            <a href="/" className="mb-12 inline-block">
              <Logo variant="light" className="h-8 md:h-10" />
            </a>
            <div className="mt-auto">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                Business Name
              </p>
              <p className="text-gray-300 text-sm tracking-wide">
                IGNITE PERFORMANCE LLC
              </p>
            </div>
          </div>

          {/* Middle Column: Links */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              {[
                "Shipping Policy",
                "Terms & Conditions",
                "Privacy Policy",
                "Refund Policy",
                "About Us",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Newsletter & Socials */}
          <div className="flex flex-col">
            <div className="mb-12">
              <div className="flex justify-between items-end border-b border-gray-600 pb-2 mb-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none w-full"
                />
                <button className="text-xs font-bold tracking-wider hover:text-[#E65100] transition-colors flex items-center whitespace-nowrap ml-4">
                  SUBSCRIBE <ChevronRight size={14} className="ml-1" />
                </button>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            <div className="mt-auto text-center md:text-left">
              <p className="text-gray-500 text-xs">
                © Ignite {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Massive Typography */}
      <div className="w-full flex justify-center items-end leading-none select-none pointer-events-none mt-10">
        <h1
          className="text-[22vw] font-heading font-black text-white tracking-tighter m-0 p-0 opacity-95"
          style={{ lineHeight: "0.75" }}
        >
          IGNITE
        </h1>
      </div>
    </footer>
  );
};
