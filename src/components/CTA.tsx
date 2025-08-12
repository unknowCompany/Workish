import React from 'react';
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main CTA */}
        <div className="glass-card p-12 md:p-16 rounded-3xl animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 block">
              Business Today?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of businesses that have revolutionized their operations with Workish. 
            Experience the future of automated business solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="btn-primary group flex items-center">
              <Calendar className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Schedule Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button className="btn-secondary group flex items-center">
              <MessageSquare className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Contact Sales
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Free 30-day trial
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              No setup fees
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
              Cancel anytime
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Sales Inquiry",
              description: "Get a personalized quote for your business needs",
              action: "Contact Sales",
              color: "from-blue-500/20 to-cyan-500/20"
            },
            {
              title: "Technical Support",
              description: "Get help with implementation and technical questions",
              action: "Get Support",
              color: "from-cyan-500/20 to-indigo-500/20"
            },
            {
              title: "Partnership",
              description: "Explore partnership opportunities with Workish",
              action: "Learn More",
              color: "from-indigo-500/20 to-purple-500/20"
            }
          ].map((card, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-2xl group hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-full h-32 bg-gradient-to-br ${card.color} rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <ArrowRight size={24} className="text-cyan-400" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {card.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4">
                {card.description}
              </p>
              
              <button className="text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-2 transition-all duration-300">
                {card.action} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;