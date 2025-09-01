import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Calculate', href: '/calculate' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div> */}
            <div className="rounded-lg">
              <img
                src="/logo/Sukhalok.png"
                alt="Sukhalok Logo"
                className="h-12 w-12 rounded"
              />
            </div>
            <span className="text-xl font-bold text-black">
              Sukhalok
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium text-black hover:text-blue-600 transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-blue-600'
                    : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-black transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium text-black hover:text-blue-600 transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-blue-600'
                      : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-200"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;