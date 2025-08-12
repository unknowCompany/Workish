import React from 'react';
import { CreditCard, TrendingUp, Truck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Intelligent PoS System",
      description: "Smart, fast, and user-friendly Point of Sale system that adapts to your business needs with real-time analytics and seamless integrations.",
      features: ["Real-time Analytics", "Multi-platform Support", "Secure Payments", "Inventory Sync"]
    },
    {
      icon: TrendingUp,
      title: "Automated Sales Management",
      description: "Revolutionary platform that automates your entire sales funnel, inventory management, and customer relations with intelligent insights.",
      features: ["Sales Automation", "CRM Integration", "Inventory Control", "Customer Insights"]
    },
    {
      icon: Truck,
      title: "Hi-Tech Logistics Management",
      description: "Advanced logistics and supply chain solution powered by AI bots for ultimate efficiency and real-time tracking capabilities.",
      features: ["AI-Powered Routing", "Real-time Tracking", "Supply Chain Optimization", "Predictive Analytics"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-gray-800 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive business solutions designed to transform your operations and accelerate growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} className="text-cyan-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-white/10">
                <button className="text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-2 transition-all duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;