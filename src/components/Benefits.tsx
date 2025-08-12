import React from 'react';
import { TrendingUp, DollarSign, Clock, Shield } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Efficiency",
      description: "Boost productivity by 300% with automated workflows and intelligent process optimization.",
      metric: "300%",
      metricLabel: "Productivity Boost"
    },
    {
      icon: DollarSign,
      title: "Reduce Costs",
      description: "Cut operational expenses significantly through smart automation and resource optimization.",
      metric: "60%",
      metricLabel: "Cost Reduction"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate repetitive tasks and focus on strategic growth with our intelligent solutions.",
      metric: "40hrs",
      metricLabel: "Saved per Week"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Enterprise-grade security with real-time monitoring and advanced threat protection.",
      metric: "99.9%",
      metricLabel: "Uptime Guarantee"
    }
  ];

  return (
    <section id="benefits" className="py-24 px-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 gap-4 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border-t border-cyan-500/30 h-24"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Workish?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience measurable results with our proven business solutions
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Metric Display */}
              <div className="glass-card p-8 rounded-2xl mb-6 group-hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon size={36} className="text-cyan-400" />
                </div>
                
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {benefit.metric}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {benefit.metricLabel}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-20 glass-card p-8 rounded-2xl animate-fade-in-up">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "50M+", label: "Transactions Processed" },
              { number: "99.9%", label: "System Uptime" },
              { number: "24/7", label: "Customer Support" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;