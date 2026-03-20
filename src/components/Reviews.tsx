import React from "react";
import { motion } from "framer-motion";
import { Star, ChevronDown, CheckCircle2 } from "lucide-react";

const thumbnails = [
  "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=compress&fit=crop&q=80&w=150&h=150",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=compress&fit=crop&q=80&w=150&h=150",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=compress&fit=crop&q=80&w=150&h=150",
];

const largeReviews = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=compress&fit=crop&q=80&w=600&h=800",
    name: "Victor T.",
    text: "Now my pre-workouts are very much sorted and don't really have to rely on coffee or other pre-workouts. I have been using it consistently for the past few days now, and never had any issues with energy crash or jitters. Couldn't recommend this enough!!",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=compress&fit=crop&q=80&w=600&h=800",
    name: "Amanda Smith",
    text: "Ignite Coffee Protein has become a great start to my morning. It keeps me going through the day, with just my morning cup. It's not what I expected protein coffee to taste like. With some cold milk: it's rich, strong and the right amount of sweet- just how I like my coffee.",
  },
];

const smallReviews = [
  {
    id: 3,
    name: "Michael R.",
    product: "Ignite Protein Functional Coffee",
    text: "After trying the product out for a few days, I can feel the energy difference. Very easy to mix and easy on your stomach too.",
  },
  {
    id: 4,
    name: "Jessica L.",
    product: "Ignite Protein Functional Coffee",
    text: "Loved the Ignite protein coffee. Tastes like an actual cafe style latte. Didn't feel the jitters or anxiety that I normally feel with a coffee. Perfect pre-workout.",
  },
  {
    id: 5,
    name: "Sarah W.",
    product: "Ignite Protein Functional Coffee",
    text: "Used it today. Was wonderful to taste. Highly satisfied.",
  },
  {
    id: 6,
    name: "David K.",
    product: "Ignite Protein Functional Coffee",
    text: "Felt like having the perfect coffee for the first time. Great taste and a really nice feel. The 10 g protein and theanine were the icing on the cake.",
  },
];

const StarRating = () => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} className="fill-orange-600 text-orange-600" />
    ))}
  </div>
);

export const Reviews = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-gray-200 pb-6">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <StarRating />
            <span className="font-semibold text-gray-900">7 Reviews</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-orange-600 text-white px-6 py-2.5 text-sm font-bold hover:bg-orange-700 transition-colors">
              Write A Review
            </button>
            <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <span>Image First</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex space-x-2 mb-8">
          {thumbnails.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Review thumbnail"
              className="w-16 h-16 object-cover rounded-sm cursor-pointer hover:opacity-80 transition-opacity"
            />
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Review Cards */}
          {largeReviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="flex flex-col border border-gray-200 rounded-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-[300px] overflow-hidden">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 bg-white flex-grow">
                <h4 className="font-semibold text-gray-900 text-lg mb-2">
                  {review.name}
                </h4>
                <div className="mb-4">
                  <StarRating />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {review.text}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Stacked Small Reviews */}
          <div className="flex flex-col space-y-4">
            {smallReviews.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (idx + 2) * 0.1 }}
                className="border border-gray-200 rounded-sm p-5 bg-white hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <span className="flex items-center text-[10px] font-bold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded-sm">
                    <CheckCircle2 size={10} className="mr-1" /> Verified
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  Reviewed{" "}
                  <a href="#" className="underline hover:text-orange-600">
                    {review.product}
                  </a>
                </p>
                <div className="mb-3">
                  <StarRating />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {review.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

