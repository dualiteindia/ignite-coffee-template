import React from "react";
import { AboutHero } from "../components/about/AboutHero";
import { AboutBanner } from "../components/about/AboutBanner";
import { AboutSplitSection } from "../components/about/AboutSplitSection";
import { AboutFounder } from "../components/about/AboutFounder";
import { AboutTeam } from "../components/about/AboutTeam";

const standForItems = [
  {
    title: "Clean steady energy without crashes.",
    text: 'Energy is easy; clear, steady focus is hard. Everything we build aims at that feeling of being "locked in".',
  },
  {
    title: "Mind and body performance.",
    text: "Real life doesn't separate them, so neither do our formulas.",
  },
  {
    title: "Taste that builds habits.",
    text: "If it doesn't taste great, it won't become a habit. We obsess over flavour as much as function.",
  },
  {
    title: "Clean ingredient transparency.",
    text: "No added sugar. No unnecessary fillers. Clear labels you can read in one glance.",
  },
  {
    title: "Built for modern lifestyles.",
    text: "We design for active routines and palates, and we keep pricing honest for daily use.",
  },
];

const buildProductsItems = [
  {
    title: "Science-guided formulation.",
    text: "We start with proven ingredients, sensible doses, and real-world use cases.",
  },
  {
    title: "Built for taste and solubility.",
    text: "Solubility, mouthfeel, aftertaste—if it doesn't dissolve cleanly or tastes chalky, it doesn't ship.",
  },
  {
    title: "Tested with real users.",
    text: "Students, founders, designers, lifters—we sample with the people who'll actually use it and refine until it sticks.",
  },
  {
    title: "Responsibly sourced ingredients.",
    text: "Quality protein, 100% Arabica coffee, coconut-derived MCTs. We work with suppliers we can audit and improve with.",
  },
  {
    title: "Transparent product standards.",
    text: "We formulate within strict guidelines and keep documentation tight.",
  },
];

export const AboutPage = () => {
  return (
    <main className="bg-white animate-blur-in">
      <AboutHero />

      <AboutBanner
        variant="green"
        heading='WHY "IGNITE"'
        text={
          <p>
            We all have a version of ourselves we're chasing—at work, in sport,
            in art, in study. <strong>Ignite</strong> is a reminder that you
            don't need to be perfect; you just need to keep moving. One better
            decision. One better cup. Every day.
          </p>
        }
      />

      <AboutSplitSection
        title="WHAT WE STAND FOR"
        items={standForItems}
        image="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/Gemini_Generated_Image_l5y8o7l5y8o7l5y8.webp"
        imagePosition="right"
      />

      <AboutSplitSection
        title="HOW WE BUILD PRODUCTS"
        items={buildProductsItems}
        image="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/ignite-coffee/ChatGPT-Image-Mar-7-2026-07_51_45-PM.webp"
        imagePosition="left"
      />

      <AboutBanner
        variant="orange"
        heading="OUR PROMISE"
        text={
          <>
            <p className="mb-4">You'll feel the difference from cup one.</p>
            <p>
              If you don't, <strong>tell us and we'll make it right</strong>
              —advice, swap, or refund. No drama.
            </p>
          </>
        }
      />

      <AboutFounder />
      <AboutTeam />
    </main>
  );
};

