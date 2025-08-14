import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Zap, Shield, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'services', 'technology', 'benefits', 'team', 'cta', 'contact'];
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Initial call to set active section
    handleScroll();
    
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'services', label: 'Solutions', icon: Zap },
    { id: 'technology', label: 'Technology', icon: Sparkles },
    { id: 'benefits', label: 'Benefits', icon: Shield },
    { id: 'team', label: 'Team', icon: Globe },
    { id: 'cta', label: 'Contact', icon: ArrowRight }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
      isScrolled || isMobileMenuOpen
        ? 'glass-card backdrop-blur-xl bg-black/30 border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Enhanced Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="group flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                <Sparkles size={20} className="text-white" />
              </div>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 group-hover:scale-105 transition-transform duration-300">
                Workish
              </span>
            </button>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 border border-cyan-400/20'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/5 hover:to-blue-400/5'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <item.icon size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>{item.label}</span>
                </div>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => scrollToSection('cta')}
              className="btn-primary text-sm px-8 py-3 rounded-2xl group hover:scale-105 transition-transform duration-300 shadow-2xl shadow-cyan-400/25"
            >
              <Sparkles size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
            </button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-12 h-12 glass-card rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) relative overflow-hidden group"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {isMobileMenuOpen ? (
              <X size={20} className="text-cyan-400 relative z-10" />
            ) : (
              <Menu size={20} className="text-cyan-400 relative z-10" />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-card rounded-3xl mt-4 mb-4 p-8 space-y-2 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 to-purple-400/5 rounded-3xl"></div>
            
            {/* Floating elements */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400/30 rounded-full animate-float"></div>
            <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-float delay-1000"></div>
            
            <div className="relative z-10">
              {navItems.map((item, index) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left transition-all duration-300 font-medium py-4 px-4 rounded-2xl group ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 border border-cyan-400/20'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/5 hover:to-blue-400/5'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-br from-cyan-400/20 to-blue-400/20'
                        : 'bg-gradient-to-br from-gray-600/20 to-gray-500/20'
                    }`}>
                      <item.icon size={16} className={activeSection === item.id ? 'text-cyan-400' : 'text-gray-400'} />
                    </div>
                    <span className="font-semibold">{item.label}</span>
                    
                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </button>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <button 
                  onClick={() => scrollToSection('cta')}
                  className="w-full btn-primary text-sm px-6 py-4 rounded-2xl group hover:scale-105 transition-transform duration-300 shadow-2xl shadow-cyan-400/25"
                >
                  <Sparkles size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
