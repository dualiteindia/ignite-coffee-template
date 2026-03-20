import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Logo } from '../components/ui/Logo';

export const SignInPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col items-center justify-center relative px-4 animate-blur-in">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white w-full max-w-[420px] rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-10"
      >
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Logo variant="dark" className="h-8" />
        </div>

        {/* Headings */}
        <div className="mb-6">
          <h1 className="text-[22px] font-semibold text-gray-900 mb-1 animate-blur-in">Sign in</h1>
          <p className="text-[14px] text-gray-500">Sign in or create an account</p>
        </div>

        {/* Shop Button */}
        <button
          onClick={handleLogin}
          type="button"
          className="w-full bg-[#5A31F4] hover:bg-[#4A21E4] text-white text-[15px] font-semibold py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex justify-center items-center"
        >
          Continue with Shop
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-[13px] text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Email Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#0058e6] focus:border-transparent transition-shadow placeholder:text-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0058e6] hover:bg-[#0048c6] text-white text-[15px] font-semibold py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            Continue
          </button>
        </form>
      </motion.div>

      {/* Footer Links */}
      <div className="absolute bottom-8 flex space-x-6 text-[13px] text-[#0058e6]">
        <a href="#" className="hover:underline">Privacy policy</a>
        <a href="#" className="hover:underline">Terms of service</a>
      </div>
    </div>
  );
};
