import React, { useState } from 'react';
import { TrendingUp, DollarSign, Clock, Shield, Zap, Users, Globe, Award, ArrowRight, Sparkles, CheckCircle, Star } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Efficiency",
      subtitle: "Productivity Boost",
      description: "Boost productivity by 300% with automated workflows and intelligent process optimization.",
      metric: "300%",
      metricLabel: "Productivity Boost",
      color: "cyan",
      features: ["Automated Workflows", "Smart Optimization", "Real-time Analytics", "Performance Tracking"]
    },
    {
      icon: DollarSign,
      title: "Reduce Costs",
      subtitle: "Smart Savings",
      description: "Cut operational expenses significantly through smart automation and resource optimization.",
      metric: "60%",
      metricLabel: "Cost Reduction",
      color: "blue",
      features: ["Resource Optimization", "Smart Automation", "Cost Analytics", "ROI Tracking"]
    },
    {
      icon: Clock,
      title: "Save Time",
      subtitle: "Time Optimization",
      description: "Automate repetitive tasks and focus on strategic growth with our intelligent solutions.",
      metric: "40hrs",
      metricLabel: "Saved per Week",
      color: "purple",
      features: ["Task Automation", "Process Streamlining", "Time Tracking", "Efficiency Gains"]
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      subtitle: "Enterprise Protection",
      description: "Enterprise-grade security with real-time monitoring and advanced threat protection.",
      metric: "99.9%",
      metricLabel: "Uptime Guarantee",
      color: "emerald",
      features: ["Real-time Monitoring", "Threat Protection", "Data Encryption", "Compliance Ready"]
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
      case 'emerald':
        return {
          gradient: 'from-emerald-400 to-teal-400',
          bg: 'from-emerald-400/20 to-teal-400/20',
          text: 'text-emerald-400',
          border: 'border-emerald-400/30',
          hover: 'hover:from-emerald-400/30 hover:to-teal-400/30'
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
    <section id="benefits" className="py-20 md:py-40 px-4 md:px-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-emerald-500/8 to-teal-500/8 rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] bg-gradient-to-br from-orange-500/8 to-red-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-70 shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-blue-400 rounded-full animate-float delay-1000 opacity-60 shadow-lg shadow-blue-400/50"></div>
        <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-purple-400 rounded-full animate-float delay-2000 opacity-80 shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-float delay-3000 opacity-50 shadow-lg shadow-emerald-400/50"></div>
        
        {/* Animated lines */}
        <div className="absolute top-1/4 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse delay-1000"></div>
      </div>

      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border-t border-cyan-500/30 h-24 rounded-sm"></div>
          ))}
        </div>
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
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 animate-pulse">Workish?</span>
          </h2>
          
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 max-w-3xl md:max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8">
            Experience measurable results with our proven business solutions
          </p>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8 mt-8 md:mt-12">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Zap size={18} className="md:w-6 md:h-6" />
              <span className="text-sm md:text-lg font-semibold">Lightning Fast</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2 text-blue-400">
              <Award size={18} className="md:w-6 md:h-6" />
              <span className="text-sm md:text-lg font-semibold">Proven Results</span>
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

        {/* Enhanced Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {benefits.map((benefit, index) => {
            const colors = getColorClasses(benefit.color);
            return (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 250}ms` }}
              >
                {/* Card Container */}
                <div className="glass-card p-6 md:p-8 rounded-2xl md:rounded-3xl group-hover:scale-105 transition-all duration-700 animate-fade-in-up relative overflow-hidden h-full">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6 md:mb-8">
                    <div className={`flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${colors.bg} rounded-xl md:rounded-2xl mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 relative`}>
                      <benefit.icon size={28} className={`${colors.text} md:w-8 md:h-8`} />
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.bg} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    
                    <p className={`text-sm font-medium ${colors.text} mb-4`}>
                      {benefit.subtitle}
                    </p>
                    
                    {/* Metric Display */}
                    <div className="mb-6">
                      <div className={`text-5xl font-black ${colors.text} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        {benefit.metric}
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                        {benefit.metricLabel}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {benefit.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {benefit.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle size={14} className={`${colors.text} flex-shrink-0`} />
                          <span className="text-gray-300 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Stats Banner */}
        <div className="mt-32 animate-fade-in-up">
          <div className="glass-card p-16 rounded-3xl relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 via-purple-400/5 to-pink-400/5 rounded-3xl"></div>
            
            {/* Floating elements */}
            <div className="absolute top-8 left-8 w-4 h-4 bg-cyan-400/30 rounded-full animate-float"></div>
            <div className="absolute top-12 right-12 w-3 h-3 bg-blue-400/30 rounded-full animate-float delay-1000"></div>
            <div className="absolute bottom-8 left-12 w-2 h-2 bg-purple-400/30 rounded-full animate-float delay-2000"></div>
            
            <div className="relative z-10">
              {/* Decorative line */}
              <div className="flex justify-center items-center mb-8">
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-4 animate-pulse"></div>
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { number: "10K+", label: "Active Users", icon: Users },
                  { number: "50M+", label: "Transactions Processed", icon: TrendingUp },
                  { number: "99.9%", label: "System Uptime", icon: Shield },
                  { number: "24/7", label: "Customer Support", icon: Globe }
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <stat.icon size={24} className="text-cyan-400" />
                      </div>
                    </div>
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;