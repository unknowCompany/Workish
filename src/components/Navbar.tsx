import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter] duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
      isScrolled 
        ? 'glass-card backdrop-blur-xl bg-black/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 transition-transform duration-300"
            >
              Workish
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium nav-link"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium nav-link"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium nav-link"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium nav-link"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium nav-link"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => scrollToSection('cta')}
              className="btn-primary text-sm px-6 py-3 group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1)"
          >
            {isMobileMenuOpen ? (
              <X size={20} className="text-cyan-400" />
            ) : (
              <Menu size={20} className="text-cyan-400" />
            )}
          </button>
        </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-[max-height,opacity] duration-500 cubic-bezier(0.4, 0, 0.2, 1) overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="glass-card rounded-2xl mt-4 p-6 space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2 nav-link"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('technology')}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2 nav-link"
              >
                Technology
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2 nav-link"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2 nav-link"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2 nav-link"
              >
                Contact
              </button>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
