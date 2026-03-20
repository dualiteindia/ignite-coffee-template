import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Ingredients } from '../components/Ingredients';
import { FeatureBanner } from '../components/FeatureBanner';
import { HowToUse } from '../components/HowToUse';
import { Reviews } from '../components/Reviews';
import { CTABanner } from '../components/CTABanner';

export const HomePage = () => {
  return (
    <main className="animate-blur-in">
      <Hero />
      <Features />
      <Ingredients />
      <FeatureBanner />
      <HowToUse />
      <Reviews />
      <CTABanner />
    </main>
  );
};
