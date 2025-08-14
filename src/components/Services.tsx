import React, { useState } from 'react';
import { CreditCard, TrendingUp, Truck, Zap, Shield, Globe, BarChart3, Users, ArrowRight, Sparkles, CheckCircle, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Intelligent PoS System",
      subtitle: "Smart Point of Sale",
      description: "Smart, fast, and user-friendly Point of Sale system that adapts to your business needs with real-time analytics and seamless integrations.",
      features: ["Real-time Analytics", "Multi-platform Support", "Secure Payments", "Inventory Sync", "Customer Insights", "Mobile Ready"],
      color: "cyan",
      stats: "99.9% Uptime",
      badge: "Most Popular"
    },
    {
      icon: TrendingUp,
      title: "Automated Sales Management",
      subtitle: "AI-Powered Sales",
      description: "Revolutionary platform that automates your entire sales funnel, inventory management, and customer relations with intelligent insights.",
      features: ["Sales Automation", "CRM Integration", "Inventory Control", "Customer Insights", "Predictive Analytics", "Multi-channel"],
      color: "blue",
      stats: "500% ROI",
      badge: "Best Seller"
    },
    {
      icon: Truck,
      title: "Hi-Tech Logistics Management",
      subtitle: "Smart Supply Chain",
      description: "Advanced logistics and supply chain solution powered by AI bots for ultimate efficiency and real-time tracking capabilities.",
      features: ["AI-Powered Routing", "Real-time Tracking", "Supply Chain Optimization", "Predictive Analytics", "Global Coverage", "Cost Reduction"],
      color: "purple",
      stats: "60% Faster",
      badge: "New Release"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          gradient: 'from-cyan-400 to-blue-400',
          bg: 'from-cyan-400/20 to-blue-400/20',
          text: 'text-cyan-400',
          border: 'border-cyan-400/30',
          hover: 'hover:from-cyan-400/30 hover:to-blue-400/30'
        };
      case 'blue':
        return {
          gradient: 'from-blue-400 to-purple-400',
          bg: 'from-blue-400/20 to-purple-400/20',
          text: 'text-blue-400',
          border: 'border-blue-400/30',
          hover: 'hover:from-blue-400/30 hover:to-purple-400/30'
        };
      case 'purple':
        return {
          gradient: 'from-purple-400 to-pink-400',
          bg: 'from-purple-400/20 to-pink-400/20',
          text: 'text-purple-400',
          border: 'border-purple-400/30',
          hover: 'hover:from-purple-400/30 hover:to-pink-400/30'
        };
      default:
        return {
          gradient: 'from-cyan-400 to-blue-400',
          bg: 'from-cyan-400/20 to-blue-400/20',
          text: 'text-cyan-400',
          border: 'border-cyan-400/30',
          hover: 'hover:from-cyan-400/30 hover:to-blue-400/30'
        };
    }
  };

  return (
    <section id="services" className="py-20 md:py-40 px-4 md:px-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute top-20 right-20 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-emerald-500/8 to-teal-500/8 rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] bg-gradient-to-br from-orange-500/8 to-red-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-32 left-32 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-70 shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-48 right-40 w-2 h-2 bg-blue-400 rounded-full animate-float delay-1000 opacity-60 shadow-lg shadow-blue-400/50"></div>
        <div className="absolute bottom-40 left-1/3 w-2.5 h-2.5 bg-purple-400 rounded-full animate-float delay-2000 opacity-80 shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-32 right-32 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float delay-3000 opacity-50 shadow-lg shadow-pink-400/50"></div>
        
        {/* Animated lines */}
        <div className="absolute top-1/4 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse delay-1000"></div>
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 animate-pulse">Solutions</span>
          </h2>
          
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 max-w-3xl md:max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8">
            Comprehensive business solutions designed to transform your operations and accelerate growth
          </p>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8 mt-8 md:mt-12">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Zap size={18} className="md:w-6 md:h-6" />
              <span className="text-sm md:text-lg font-semibold">Lightning Fast</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2 text-blue-400">
              <Shield size={18} className="md:w-6 md:h-6" />
              <span className="text-sm md:text-lg font-semibold">Enterprise Security</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Globe size={18} className="md:w-6 md:h-6" />
              <span className="text-sm md:text-lg font-semibold">Global Scale</span>
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-8 space-x-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Card Container */}
                <div className="glass-card p-6 md:p-10 rounded-2xl md:rounded-3xl group-hover:scale-105 transition-all duration-700 animate-fade-in-up relative overflow-hidden h-full">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className={`flex items-center space-x-1 px-3 py-1 bg-gradient-to-r ${colors.bg} rounded-full border ${colors.border} backdrop-blur-sm`}>
                      <Star size={12} className={colors.text} />
                      <span className={`text-xs font-medium ${colors.text}`}>{service.badge}</span>
                    </div>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6 md:mb-8">
                    <div className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${colors.bg} rounded-2xl md:rounded-3xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 relative`}>
                      <service.icon size={28} className={`${colors.text} md:w-9 md:h-9`} />
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${colors.bg} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </div>
                    
                    {/* Stats Badge */}
                    <div className="absolute -bottom-2 -right-2 w-16 h-8 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full border border-amber-400/30 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-xs font-bold text-amber-400">{service.stats}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className={`text-xs md:text-sm font-medium ${colors.text} mb-3 md:mb-4`}>
                      {service.subtitle}
                    </p>
                    
                    <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 md:space-x-3">
                          <CheckCircle size={14} className={`${colors.text} flex-shrink-0 md:w-4 md:h-4`} />
                          <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-6 border-t border-white/10">
                      <button className={`${colors.text} hover:text-white font-semibold group-hover:translate-x-2 transition-all duration-300 flex items-center space-x-2`}>
                        <span>Learn More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-16 md:mt-32 text-center animate-fade-in-up">
          <div className="glass-card p-8 md:p-16 rounded-2xl md:rounded-3xl max-w-4xl mx-auto relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 via-purple-400/5 to-pink-400/5 rounded-3xl"></div>
            
            {/* Floating elements */}
            <div className="absolute top-8 left-8 w-4 h-4 bg-cyan-400/30 rounded-full animate-float"></div>
            <div className="absolute top-12 right-12 w-3 h-3 bg-blue-400/30 rounded-full animate-float delay-1000"></div>
            <div className="absolute bottom-8 left-12 w-2 h-2 bg-purple-400/30 rounded-full animate-float delay-2000"></div>
            
            <div className="relative z-10">
              {/* Decorative line */}
              <div className="flex justify-center items-center mb-6 md:mb-8">
                <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                <div className="w-2 md:w-3 h-2 md:h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-2 md:mx-4 animate-pulse"></div>
                <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-8">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 mb-6 md:mb-10 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
                Join thousands of businesses that have already revolutionized their operations with our cutting-edge solutions.
              </p>
              
              <button className="btn-primary text-base md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-2xl md:rounded-3xl hover:scale-105 transition-transform duration-300 shadow-2xl shadow-cyan-400/25">
                <Sparkles size={20} className="mr-2 md:mr-3 md:w-6 md:h-6" />
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;