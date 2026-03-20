import React from 'react';
import { ProductShowcase } from '../components/product/ProductShowcase';
import { ProductMarquee } from '../components/product/ProductMarquee';
import { Benefits } from '../components/product/Benefits';

export const ProductPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ProductShowcase />
      <ProductMarquee />
      <Benefits />
    </div>
  );
};
