import React, { useState, useEffect } from 'react';
import { Bot, Cpu, Zap, Brain, Sparkles, ArrowRight, Globe, Shield, TrendingUp, Users, CheckCircle, Star } from 'lucide-react';

const Technology: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    "Machine Learning Optimization",
    "Intelligent Automation Bots", 
    "Real-time Data Processing",
    "Lightning-fast Performance"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  const techFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms that continuously learn and adapt to optimize your business processes.",
      color: "cyan",
      stats: "99.9% Accuracy"
    },
    {
      icon: Bot,
      title: "Smart Automation",
      description: "Intelligent bots that handle complex tasks with human-like precision and 24/7 availability.",
      color: "blue",
      stats: "24/7 Operation"
    },
    {
      icon: Cpu,
      title: "Real-time Processing",
      description: "Lightning-fast data processing capabilities that deliver instant insights and responses.",
      color: "purple",
      stats: "10ms Response"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized systems designed for maximum efficiency and minimal latency across all operations.",
      color: "emerald",
      stats: "500% Faster"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          gradient: 'from-cyan-400 to-blue-400',
          bg: 'from-cyan-400/20 to-blue-400/20',
          text: 'text-cyan-400',
          border: 'border-cyan-400/30'
        };
      case 'blue':
        return {
          gradient: 'from-blue-400 to-purple-400',
          bg: 'from-blue-400/20 to-purple-400/20',
          text: 'text-blue-400',
          border: 'border-blue-400/30'
        };
      case 'purple':
        return {
          gradient: 'from-purple-400 to-pink-400',
          bg: 'from-purple-400/20 to-pink-400/20',
          text: 'text-purple-400',
          border: 'border-purple-400/30'
        };
      case 'emerald':
        return {
          gradient: 'from-emerald-400 to-teal-400',
          bg: 'from-emerald-400/20 to-teal-400/20',
          text: 'text-emerald-400',
          border: 'border-emerald-400/30'
        };
      default:
        return {
          gradient: 'from-cyan-400 to-blue-400',
          bg: 'from-cyan-400/20 to-blue-400/20',
          text: 'text-cyan-400',
          border: 'border-cyan-400/30'
        };
    }
  };

  return (
    <section id="technology" className="py-20 md:py-40 px-4 md:px-6 bg-gradient-to-b from-black via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Enhanced Animated Background with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs with parallax */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse parallax-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 parallax-medium"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse delay-500 parallax-fast"></div>
        
        {/* Additional floating elements with parallax */}
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-emerald-500/8 to-teal-500/8 rounded-full blur-3xl animate-pulse delay-1500 parallax-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] bg-gradient-to-br from-orange-500/8 to-red-500/8 rounded-full blur-3xl animate-pulse delay-2000 parallax-medium"></div>
        
        {/* Floating particles with parallax */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-70 shadow-lg shadow-cyan-400/50 parallax-fast"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-blue-400 rounded-full animate-float delay-1000 opacity-60 shadow-lg shadow-blue-400/50 parallax-medium"></div>
        <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-purple-400 rounded-full animate-float delay-2000 opacity-80 shadow-lg shadow-purple-400/50 parallax-slow"></div>
        <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-float delay-3000 opacity-50 shadow-lg shadow-emerald-400/50 parallax-fast"></div>
        
        {/* Animated lines with parallax */}
        <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-pulse parallax-medium"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse delay-1000 parallax-slow"></div>
        <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-pulse delay-2000 parallax-fast"></div>
        
        {/* Additional parallax elements */}
        <div className="absolute top-1/6 left-1/6 w-4 h-4 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full animate-float delay-500 parallax-fast"></div>
        <div className="absolute bottom-1/6 right-1/6 w-3 h-3 bg-gradient-to-r from-purple-400/12 to-pink-400/12 rounded-full animate-float delay-1500 parallax-medium"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full animate-float delay-2500 parallax-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 md:mb-32 animate-fade-in-up">
          {/* Decorative elements */}
          <div className="flex justify-center items-center mb-4 md:mb-8 space-x-2 md:space-x-4">
            <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="w-2 md:w-4 h-2 md:h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
            <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-8 leading-tight">
            Powered by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 animate-pulse block mt-2 md:mt-4">
              AI & Automation
            </span>
          </h2>
          
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 max-w-3xl md:max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8">
            Our cutting-edge AI bots and machine learning algorithms work tirelessly 
            to optimize your business processes, predict market trends, and automate 
            complex logistics operations.
          </p>
          
          {/* Dynamic Feature Display */}
          <div className="flex justify-center items-center space-x-4 md:space-x-8 mt-8 md:mt-12">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Sparkles size={18} className="md:w-6 md:h-6" />
              <span className="text-sm md:text-lg font-semibold">{features[currentFeature]}</span>
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-8 space-x-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Enhanced Content */}
          <div className="animate-fade-in-left">
            <div className="space-y-8 mb-12">
              {techFeatures.map((feature, index) => {
                const colors = getColorClasses(feature.color);
                return (
                  <div key={index} className="group">
                    <div className="glass-card p-6 rounded-2xl group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
                      {/* Gradient Border Effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10 flex items-start space-x-4">
                        <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-2xl group-hover:scale-110 transition-transform duration-500 relative`}>
                          <feature.icon size={28} className={colors.text} />
                          
                          {/* Glow effect */}
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.bg} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {feature.title}
                            </h3>
                            <div className={`px-3 py-1 bg-gradient-to-r ${colors.bg} rounded-full border ${colors.border} backdrop-blur-sm`}>
                              <span className={`text-xs font-bold ${colors.text}`}>{feature.stats}</span>
                            </div>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="btn-primary text-xl px-12 py-6 rounded-3xl hover:scale-105 transition-transform duration-300 shadow-2xl shadow-cyan-400/25">
              <Sparkles size={24} className="mr-3" />
              Explore AI Features
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
            </button>
          </div>

          {/* Enhanced Visual */}
          <div className="relative animate-fade-in-right">
            <div className="glass-card p-16 rounded-3xl relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 via-purple-400/5 to-pink-400/5 rounded-3xl"></div>
              
              {/* Floating elements */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-cyan-400/30 rounded-full animate-float"></div>
              <div className="absolute top-12 right-12 w-3 h-3 bg-blue-400/30 rounded-full animate-float delay-1000"></div>
              <div className="absolute bottom-8 left-12 w-2 h-2 bg-purple-400/30 rounded-full animate-float delay-2000"></div>
              
              <div className="relative z-10">
                {/* AI Visualization */}
                <div className="relative h-96 flex items-center justify-center">
                  {/* Central Hub */}
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse relative">
                    <Brain size={48} className="text-white" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 blur-2xl opacity-50 animate-pulse"></div>
                  </div>

                  {/* Orbiting Elements */}
                  {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                    <div 
                      key={index}
                      className="absolute w-16 h-16 glass-card rounded-full flex items-center justify-center group hover:scale-110 transition-transform duration-300"
                      style={{
                        transform: `rotate(${angle}deg) translateX(140px) rotate(-${angle}deg)`,
                        animation: `orbit 20s linear infinite ${index * -3.33}s`
                      }}
                    >
                      {[Bot, Cpu, Zap, Bot, Cpu, Zap][index] && 
                        React.createElement([Bot, Cpu, Zap, Bot, Cpu, Zap][index], {
                          size: 24,
                          className: "text-cyan-400 group-hover:text-white transition-colors duration-300"
                        })
                      }
                    </div>
                  ))}

                  {/* Connecting Lines */}
                  <div className="absolute inset-0">
                    {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                      <div 
                        key={index}
                        className="absolute top-1/2 left-1/2 w-40 h-px bg-gradient-to-r from-cyan-400/50 to-transparent origin-left"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                          animation: `pulse 2s ease-in-out infinite ${index * 0.3}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;