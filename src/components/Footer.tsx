import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Facebook, Instagram, ArrowRight, Sparkles, Globe, Shield, Zap, Users, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "PoS System", description: "Smart Point of Sale" },
        { name: "Sales Automation", description: "AI-Powered Sales" },
        { name: "Logistics Management", description: "Smart Supply Chain" },
        { name: "Analytics Dashboard", description: "Real-time Insights" },
        { name: "API Integration", description: "Seamless Connectivity" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", description: "Our Story" },
        { name: "Careers", description: "Join Our Team" },
        { name: "Press", description: "Latest News" },
        { name: "Partners", description: "Ecosystem" },
        { name: "Blog", description: "Insights & Updates" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", description: "Find Answers" },
        { name: "Documentation", description: "Developer Guide" },
        { name: "Community", description: "User Forum" },
        { name: "Status", description: "System Health" },
        { name: "Contact", description: "Get in Touch" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@workish.com", href: "mailto:hello@workish.com" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "San Francisco, CA", href: "#" }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white py-40 px-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/6 to-pink-500/6 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-50 shadow-lg shadow-cyan-400/30"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float delay-1000 opacity-40 shadow-lg shadow-blue-400/30"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float delay-2000 opacity-60 shadow-lg shadow-purple-400/30"></div>
        
        {/* Animated lines */}
        <div className="absolute top-1/4 left-1/2 w-px h-24 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-px h-16 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Brand Section */}
        <div className="text-center mb-32">
          {/* Decorative elements */}
          <div className="flex justify-center items-center mb-8 space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
          
          <h3 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 mb-6">
            Workish
          </h3>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Revolutionizing business operations with intelligent automation and cutting-edge technology solutions.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Users size={20} />
              <span className="text-sm font-semibold">10K+ Users</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center space-x-2 text-blue-400">
              <Globe size={20} />
              <span className="text-sm font-semibold">50+ Countries</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Shield size={20} />
              <span className="text-sm font-semibold">99.9% Uptime</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-blue-400/20"

              >
                <social.icon size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
          
          <div className="flex justify-center items-center mt-8 space-x-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          </div>
        </div>

        {/* Enhanced Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-32">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-2xl font-bold mb-8 text-white">Get in Touch</h4>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a 
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <contact.icon size={20} className="text-cyan-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {contact.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="text-2xl font-bold mb-8 text-white">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="group flex items-center space-x-3 hover:scale-105 transition-transform duration-300"

                    >
                      <ArrowRight size={16} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-x-1" />
                      <div>
                        <div className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                          {link.name}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {link.description}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Heart size={16} className="text-red-400 animate-pulse" />
                <span className="text-gray-400 text-sm">
                  Made with love by the Workish team
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300 hover:scale-105"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Workish. All rights reserved. | 
              <span className="text-cyan-400 ml-1">Empowering businesses with intelligent automation</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
