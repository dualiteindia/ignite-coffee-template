import React from 'react';

const PageWrapper = ({ title, description }: { title: string, description: string }) => (
  <main className="min-h-[70vh] pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center bg-white animate-blur-in">
    <h1 className="font-heading font-black text-5xl md:text-7xl uppercase tracking-tighter text-gray-900 mb-6 animate-blur-in">
      {title}
    </h1>
    <p className="text-gray-600 text-lg max-w-2xl">
      {description}
    </p>
  </main>
);

export const ContactPage = () => <PageWrapper title="Contact Us" description="Have a question? Drop us a line at hi@ignitefuel.com." />;
