import React, { useState } from 'react';
import { ArrowRight, Calendar, MessageSquare, Sparkles, Shield, Zap, Users, Globe, CheckCircle, Star, Heart, Award } from 'lucide-react';

const CTA: React.FC = () => {
  const contactCards = [
    {
      title: "Sales Inquiry",
      subtitle: "Get Personalized Quote",
      description: "Get a personalized quote for your business needs with our expert sales team.",
      action: "Contact Sales",
      icon: MessageSquare,
      color: "blue",
      features: ["Custom Pricing", "Expert Consultation", "ROI Analysis", "Implementation Plan"]
    },
    {
      title: "Technical Support",
      subtitle: "24/7 Expert Help",
      description: "Get help with implementation and technical questions from our certified experts.",
      action: "Get Support",
      icon: Shield,
      color: "cyan",
      features: ["24/7 Support", "Live Chat", "Video Calls", "Documentation"]
    },
    {
      title: "Partnership",
      subtitle: "Grow Together",
      description: "Explore partnership opportunities with Workish and expand your business reach.",
      action: "Learn More",
      icon: Users,
      color: "purple",
      features: ["Revenue Sharing", "Marketing Support", "Training Programs", "Co-branding"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          gradient: 'from-blue-400 to-cyan-400',
          bg: 'from-blue-400/20 to-cyan-400/20',
          text: 'text-blue-400',
          border: 'border-blue-400/30'
        };
      case 'cyan':
        return {
          gradient: 'from-cyan-400 to-indigo-400',
          bg: 'from-cyan-400/20 to-indigo-400/20',
          text: 'text-cyan-400',
          border: 'border-cyan-400/30'
        };
      case 'purple':
        return {
          gradient: 'from-purple-400 to-pink-400',
          bg: 'from-purple-400/20 to-pink-400/20',
          text: 'text-purple-400',
          border: 'border-purple-400/30'
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
    <section id="cta" className="py-20 md:py-40 px-4 md:px-6 bg-gradient-to-b from-black via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-cyan-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        
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

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Enhanced Main CTA */}
        <div className="glass-card p-8 md:p-16 lg:p-20 rounded-2xl md:rounded-3xl animate-fade-in relative overflow-hidden mb-16 md:mb-32">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 via-purple-400/5 to-pink-400/5 rounded-3xl"></div>
          
          {/* Floating elements */}
          <div className="absolute top-8 left-8 w-4 h-4 bg-cyan-400/30 rounded-full animate-float"></div>
          <div className="absolute top-12 right-12 w-3 h-3 bg-blue-400/30 rounded-full animate-float delay-1000"></div>
          <div className="absolute bottom-8 left-12 w-2 h-2 bg-purple-400/30 rounded-full animate-float delay-2000"></div>
          
          <div className="relative z-10">
            {/* Decorative elements */}
            <div className="flex justify-center items-center mb-6 md:mb-8 space-x-2 md:space-x-4">
              <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              <div className="w-2 md:w-4 h-2 md:h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
              <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-8 leading-tight">
              Ready to Transform Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 animate-pulse block mt-2 md:mt-4">
                Business Today?
              </span>
            </h2>
            
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 mb-8 md:mb-16 max-w-4xl md:max-w-5xl mx-auto leading-relaxed">
              Join thousands of businesses that have revolutionized their operations with Workish. 
              Experience the future of automated business solutions.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-12 mb-8 md:mb-16">
              <div className="flex items-center space-x-2 md:space-x-3 text-cyan-400">
                <Users size={20} className="md:w-7 md:h-7" />
                <div className="text-left">
                  <div className="text-lg md:text-2xl font-bold">10K+</div>
                  <div className="text-xs md:text-sm text-gray-400">Happy Customers</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 md:h-12 bg-gray-600"></div>
              <div className="flex items-center space-x-2 md:space-x-3 text-blue-400">
                <Award size={20} className="md:w-7 md:h-7" />
                <div className="text-left">
                  <div className="text-lg md:text-2xl font-bold">99.9%</div>
                  <div className="text-xs md:text-sm text-gray-400">Uptime Guarantee</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 md:h-12 bg-gray-600"></div>
              <div className="flex items-center space-x-2 md:space-x-3 text-purple-400">
                <Globe size={20} className="md:w-7 md:h-7" />
                <div className="text-left">
                  <div className="text-lg md:text-2xl font-bold">50+</div>
                  <div className="text-xs md:text-sm text-gray-400">Countries</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center mb-8 md:mb-16">
              <button className="btn-primary group text-base md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-2xl md:rounded-3xl hover:scale-105 transition-transform duration-300 shadow-2xl shadow-cyan-400/25">
                <Calendar className="mr-2 md:mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                Schedule Demo
                <ArrowRight className="ml-2 md:ml-3 group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </button>
              
              <button className="btn-secondary group text-base md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-2xl md:rounded-3xl hover:scale-105 transition-transform duration-300">
                <MessageSquare className="mr-2 md:mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                Contact Sales
              </button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 md:w-3 h-2 md:h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <span className="text-xs md:text-sm font-medium">Free 30-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 md:w-3 h-2 md:h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
                <span className="text-xs md:text-sm font-medium">No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 md:w-3 h-2 md:h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                <span className="text-xs md:text-sm font-medium">Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 md:w-3 h-2 md:h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
                <span className="text-xs md:text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {contactCards.map((card, index) => {
            const colors = getColorClasses(card.color);
            return (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="glass-card p-6 md:p-10 rounded-2xl md:rounded-3xl group-hover:scale-105 transition-all duration-700 animate-fade-in-up relative overflow-hidden h-full">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${colors.bg} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative mx-auto`}>
                      <card.icon size={36} className={colors.text} />
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${colors.bg} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className={`text-sm font-medium ${colors.text} mb-4`}>
                      {card.subtitle}
                    </p>
                    
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                      {card.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-8">
                      {card.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle size={14} className={`${colors.text} flex-shrink-0`} />
                          <span className="text-gray-300 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`${colors.text} hover:text-white font-semibold group-hover:translate-x-2 transition-all duration-300 flex items-center space-x-2 justify-center`}>
                      <span>{card.action}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTA;