import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=compress&fit=crop&q=80&w=800",
    quote:
      "I used to start every day with a café latte, only to crash by mid-morning. Now I reach for Protein Coffee. 10 g of protein, under 50 calories, and it tastes just like my favorite brew. No jitters, no sugar crash, just smooth, lasting energy.",
    name: "Utkarsh",
    role: "ENGINEER | RUNNER",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=compress&fit=crop&q=80&w=800",
    quote:
      '"Twenty minutes before my gym session, I stir up a scoop of Protein Coffee. With 70 mg caffeine + 70 mg L-theanine for clean focus and 10 g protein to fuel my muscles, it fires me up without the usual crash or chalky aftertaste. It\'s my new go-to pre-workout ritual."',
    name: "Rachika",
    role: "NUTRITIONIST",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-8 lg:gap-10"
            >
              {/* Image */}
              <div className="w-full sm:w-1/2">
                <div className="aspect-square sm:aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full sm:w-1/2 flex flex-col justify-center">
                <p className="text-[17px] md:text-lg text-gray-900 font-medium leading-relaxed mb-8">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-bold text-sm text-gray-900 mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
