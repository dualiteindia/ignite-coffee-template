import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FooterTicker } from './components/FooterTicker';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { AboutPage } from './pages/AboutPage';
import { SignInPage } from './pages/SignInPage';
import { ContactPage } from './pages/PlaceholderPages';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';

function AppContent() {
  const location = useLocation();
  // Hide Navbar, Drawer, and Footer on Auth and Checkout pages for a cleaner flow
  const isAuthPage = location.pathname === '/signin';
  const isCheckoutPage = location.pathname === '/checkout';
  const hideChrome = isAuthPage || isCheckoutPage;

  return (
    <div className="min-h-screen bg-white selection:bg-orange-600 selection:text-white flex flex-col">
      <ScrollToTop />
      
      {!hideChrome && <Navbar />}
      {!hideChrome && <CartDrawer />}
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>

      {!hideChrome && <FooterTicker />}
      {!hideChrome && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
