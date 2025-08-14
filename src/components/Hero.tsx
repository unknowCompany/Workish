import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, Zap, TrendingUp, Users, Globe, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const dynamicTexts = [
    "Business, Automated.",
    "Retail, Transformed.",
    "Commerce, Elevated.",
    "Operations, Optimized."
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-gray-800">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-[120px] h-[120px] md:w-[250px] md:h-[250px] bg-gradient-to-br from-indigo-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/3 w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-gradient-to-br from-emerald-500/6 to-teal-500/6 rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[80px] h-[80px] md:w-[180px] md:h-[180px] bg-gradient-to-br from-orange-500/6 to-red-500/6 rounded-full blur-3xl animate-pulse delay-3000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60 shadow-lg shadow-cyan-400/40"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float delay-1000 opacity-50 shadow-lg shadow-blue-400/40"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float delay-2000 opacity-70 shadow-lg shadow-purple-400/40"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-pink-400 rounded-full animate-float delay-3000 opacity-40 shadow-lg shadow-pink-400/40"></div>
        <div className="absolute top-1/2 left-10 w-0.5 h-0.5 bg-emerald-400 rounded-full animate-float delay-500 opacity-30 shadow-lg shadow-emerald-400/40"></div>
        <div className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-orange-400 rounded-full animate-float delay-1500 opacity-50 shadow-lg shadow-orange-400/40"></div>
        
        {/* Animated lines */}
        <div className="absolute top-1/4 left-1/2 w-px h-24 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-px h-16 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-px h-12 bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse delay-2000"></div>
      </div>

              {/* Enhanced Parallax Grid */}
        <div className="absolute inset-0 opacity-8">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-2 md:gap-4 h-full transform translate-y-8 parallax-slow">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border border-cyan-500/15 h-12 md:h-20 rounded-sm"></div>
            ))}
          </div>
        </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Decorative elements */}
        <div className="flex justify-center items-center mb-4 md:mb-6 space-x-2 md:space-x-3">
          <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="w-2 md:w-3 h-2 md:h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
          <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>

        {/* Enhanced Glassmorphism Container */}
        <div className="glass-card p-8 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl animate-fade-in relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/3 via-blue-400/3 via-purple-400/3 to-pink-400/3 rounded-3xl"></div>
          
          {/* Floating elements in container */}
          <div className="absolute top-6 left-6 w-3 h-3 bg-cyan-400/20 rounded-full animate-float"></div>
          <div className="absolute top-8 right-8 w-2 h-2 bg-blue-400/20 rounded-full animate-float delay-1000"></div>
          <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-float delay-2000"></div>
          
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black text-white mb-4 md:mb-6 leading-tight">
              The Future of Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 animate-pulse block mt-1 md:mt-2">
                {dynamicTexts[currentText]}
              </span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
              Revolutionize your retail and e-commerce operations with our AI-powered, 
              all-in-one business solutions. Experience the next generation of intelligent automation.
            </p>

            {/* Stats Section */}
            <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-8 md:mb-12">
              <div className="flex items-center space-x-2 text-cyan-400">
                <TrendingUp size={16} className="md:w-5 md:h-5" />
                <div className="text-left">
                  <div className="text-sm md:text-lg font-bold">500%</div>
                  <div className="text-xs text-gray-400">Efficiency</div>
                </div>
              </div>
              <div className="w-px h-6 md:h-8 bg-gray-600"></div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Users size={16} className="md:w-5 md:h-5" />
                <div className="text-left">
                  <div className="text-sm md:text-lg font-bold">10K+</div>
                  <div className="text-xs text-gray-400">Clients</div>
                </div>
              </div>
              <div className="w-px h-6 md:h-8 bg-gray-600"></div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Globe size={16} className="md:w-5 md:h-5" />
                <div className="text-left">
                  <div className="text-sm md:text-lg font-bold">50+</div>
                  <div className="text-xs text-gray-400">Countries</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <button className="btn-primary group text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl hover:scale-105 transition-transform duration-300 shadow-xl shadow-cyan-400/20">
                <Sparkles className="mr-2" size={18} />
                Request Demo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </button>
              
              <button className="btn-secondary group text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl hover:scale-105 transition-transform duration-300">
                <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" size={18} />
                Watch Video
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield size={14} className="md:w-4 md:h-4" />
                <span className="text-xs md:text-sm">Enterprise Security</span>
              </div>
              <div className="hidden sm:block w-px h-3 bg-gray-600"></div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Zap size={14} className="md:w-4 md:h-4" />
                <span className="text-xs md:text-sm">Lightning Fast</span>
              </div>
              <div className="hidden sm:block w-px h-3 bg-gray-600"></div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Sparkles size={14} className="md:w-4 md:h-4" />
                <span className="text-xs md:text-sm">AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center">
          <span className="text-xs md:text-sm mb-2 md:mb-3 font-medium">Scroll to explore</span>
          <div className="w-px h-8 md:h-12 bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent animate-pulse"></div>
          <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-cyan-400 rounded-full mt-1 md:mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;