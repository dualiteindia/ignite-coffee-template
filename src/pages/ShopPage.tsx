import React from 'react';
import { ProductShowcase } from '../components/product/ProductShowcase';
import { ProductMarquee } from '../components/product/ProductMarquee';
import { Benefits } from '../components/product/Benefits';
import { ProductIngredients } from '../components/product/ProductIngredients';
import { Testimonials } from '../components/product/Testimonials';
import { Reviews } from '../components/Reviews';
import { FAQ } from '../components/FAQ';

export const ShopPage = () => {
  return (
    <main className="pt-20 animate-blur-in">
      <ProductShowcase />
      <ProductMarquee />
      <Benefits />
      <ProductIngredients />
      <Testimonials />
      <Reviews />
      <FAQ />
    </main>
  );
};
