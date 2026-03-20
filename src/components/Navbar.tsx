import React, { useState, useEffect } from 'react';
import { User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { Logo } from './ui/Logo';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const { totalItems, openCart } = useCart();
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  // Close mobile menu automatically when the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 p-2 -ml-2 hover:text-orange-600 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>

          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none md:justify-start">
            <Link to="/" className="flex items-center">
              <Logo variant="dark" />
            </Link>
          </div>

          {/* Center: Links (Hidden on mobile) */}
          <div className="hidden md:flex space-x-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors",
                  location.pathname === link.path ? "text-orange-600" : "text-gray-900 hover:text-orange-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {isLoggedIn ? (
              <button 
                onClick={logout}
                className="text-orange-600 hover:text-orange-700 transition-colors hidden sm:block"
                title="Sign Out"
                aria-label="Sign out"
              >
                <User size={24} strokeWidth={2.5} />
              </button>
            ) : (
              <Link 
                to="/signin" 
                className="text-gray-900 hover:text-orange-600 transition-colors hidden sm:block"
                aria-label="Sign in"
              >
                <User size={24} strokeWidth={1.5} />
              </Link>
            )}
            
            <button 
              onClick={openCart}
              className="text-gray-900 hover:text-orange-600 transition-colors relative p-2 -mr-2 sm:p-0 sm:mr-0"
              aria-label="Open cart"
            >
              <ShoppingBag size={24} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 sm:-top-1 sm:-right-2 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-gray-100 bg-white overflow-hidden shadow-xl absolute w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    "block px-3 py-4 text-base font-semibold uppercase tracking-wider border-b border-gray-50 transition-colors",
                    location.pathname === link.path ? "text-orange-600" : "text-gray-900 hover:text-orange-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Auth Link */}
              <div className="pt-4 sm:hidden">
                {isLoggedIn ? (
                  <button 
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center px-3 py-2 text-base font-semibold uppercase tracking-wider text-orange-600 w-full text-left"
                  >
                    <User size={20} className="mr-3" strokeWidth={2.5} />
                    Sign Out
                  </button>
                ) : (
                  <Link 
                    to="/signin" 
                    className="flex items-center px-3 py-2 text-base font-semibold uppercase tracking-wider text-gray-900 hover:text-orange-600 transition-colors"
                  >
                    <User size={20} className="mr-3" strokeWidth={1.5} />
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
