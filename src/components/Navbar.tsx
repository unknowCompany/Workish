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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) navbar-no-border ${
      isScrolled || isMobileMenuOpen
        ? 'backdrop-blur-xl bg-black/30' 
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
                    ? 'text-cyan-400 bg-gradient-to-r from-cyan-400/10 to-blue-400/10'
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
              className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white text-sm px-6 py-2.5 rounded-xl group hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-400/20 font-medium navbar-no-border"
            >
              
              Get Started
              
            </button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-12 h-12 bg-gradient-to-r from-cyan-400/8 to-blue-400/8 rounded-2xl flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out relative overflow-hidden group backdrop-blur-sm navbar-no-border"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            
            {isMobileMenuOpen ? (
              <X size={20} className="text-cyan-400 relative z-10 group-hover:scale-105 transition-transform duration-300" />
            ) : (
              <Menu size={20} className="text-cyan-400 relative z-10 group-hover:scale-105 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu - Moved outside container */}
      <div className={`md:hidden transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) overflow-hidden ${
        isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`p-4 md:p-6 space-y-1.5 relative overflow-hidden navbar-no-border rounded-2xl bg-gradient-to-r from-cyan-400/3 via-blue-400/3 to-purple-400/3 transition-all duration-500 ${
            isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}>
            
            <div className="relative z-10">
              {navItems.map((item, index) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left transition-all duration-500 font-medium py-2.5 md:py-3 px-3 rounded-lg group transform ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-gradient-to-r from-cyan-400/12 to-blue-400/12 scale-105'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/8 hover:to-blue-400/8 hover:scale-102'
                  }`}
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animation: isMobileMenuOpen ? 'slideInUp 0.6s ease-out forwards' : 'none'
                  }}
                >
                                      <div className="flex items-center space-x-2.5 md:space-x-3">
                      <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-br from-cyan-400/20 to-blue-400/20 shadow-lg shadow-cyan-400/20'
                          : 'bg-gradient-to-br from-gray-600/25 to-gray-500/25'
                      }`}>
                        <item.icon size={15} className={`${activeSection === item.id ? 'text-cyan-400' : 'text-gray-400'} md:w-4 md:h-4 group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                                          <span className="font-medium text-sm md:text-base transition-all duration-300 group-hover:translate-x-1">{item.label}</span>
                    
                      {/* Active indicator */}
                      {activeSection === item.id && (
                        <div className="ml-auto w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                      )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
