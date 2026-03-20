import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Marquee } from './Marquee';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/jenny_hu/ChatGPT-Image-Mar-7-2026-07_03_27-PM.webp",
    headline: "IGNITE YOUR POTENTIAL",
    subtext: "Clean energy coffee built for creators and athletes"
  },
  {
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/jenny_hu/ChatGPT-Image-Mar-7-2026-01_52_22-PM.webp",
    headline: "COFFEE FOR FOCUS",
    subtext: "Sustained energy without the crash"
  },
  {
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/jenny_hu/ChatGPT-Image-Mar-7-2026-01_57_48-PM.webp",
    headline: "PERFORMANCE COFFEE",
    subtext: "Fuel your mornings and deep work sessions"
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden pt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter mb-4 max-w-5xl"
            >
              {slides[currentSlide].headline}
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 font-medium max-w-2xl uppercase tracking-wide"
            >
              {slides[currentSlide].subtext}
            </motion.p>
            
            <motion.button
              onClick={() => navigate('/shop')}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-8 bg-white text-black px-8 py-4 font-heading font-bold uppercase tracking-widest text-sm hover:bg-orange-600 hover:text-white transition-colors duration-300"
            >
              Shop Ignite &gt;
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <Marquee />
    </div>
  );
};
