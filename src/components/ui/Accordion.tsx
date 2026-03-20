import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { clsx } from 'clsx';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  iconType?: 'chevron' | 'plus';
  defaultOpen?: boolean;
  titleClassName?: string;
}

export const Accordion = ({ 
  title, 
  children, 
  iconType = 'chevron', 
  defaultOpen = false,
  titleClassName = "font-semibold text-gray-900 text-[15px]"
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-300 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className={titleClassName}>{title}</span>
        {iconType === 'chevron' ? (
          <ChevronDown 
            size={20} 
            className={clsx("text-gray-500 transition-transform duration-300", isOpen && "rotate-180")} 
          />
        ) : (
          isOpen ? <Minus size={20} className="text-gray-900 flex-shrink-0 ml-4" /> : <Plus size={20} className="text-gray-900 flex-shrink-0 ml-4" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600 text-sm leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
