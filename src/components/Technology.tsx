import React from 'react';
import { Bot, Cpu, Zap, Brain } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-24 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Powered by
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 block">
                AI & Automation
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our cutting-edge AI bots and machine learning algorithms work tirelessly 
              to optimize your business processes, predict market trends, and automate 
              complex logistics operations.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: Brain, text: "Machine Learning Optimization" },
                { icon: Bot, text: "Intelligent Automation Bots" },
                { icon: Cpu, text: "Real-time Data Processing" },
                { icon: Zap, text: "Lightning-fast Performance" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon size={24} className="text-cyan-400" />
                  </div>
                  <span className="text-lg text-gray-200 group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <button className="btn-primary">
              Explore AI Features
            </button>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in-right">
            <div className="glass-card p-12 rounded-3xl">
              {/* AI Visualization */}
              <div className="relative h-96 flex items-center justify-center">
                {/* Central Hub */}
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                  <Brain size={36} className="text-white" />
                </div>

                {/* Orbiting Elements */}
                {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                  <div 
                    key={index}
                    className="absolute w-12 h-12 glass-card rounded-full flex items-center justify-center"
                    style={{
                      transform: `rotate(${angle}deg) translateX(120px) rotate(-${angle}deg)`,
                      animation: `orbit 20s linear infinite ${index * -3.33}s`
                    }}
                  >
                    {[Bot, Cpu, Zap, Bot, Cpu, Zap][index] && 
                      React.createElement([Bot, Cpu, Zap, Bot, Cpu, Zap][index], {
                        size: 20,
                        className: "text-cyan-400"
                      })
                    }
                  </div>
                ))}

                {/* Connecting Lines */}
                <div className="absolute inset-0">
                  {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                    <div 
                      key={index}
                      className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-cyan-400/50 to-transparent origin-left"
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
    </section>
  );
};

export default Technology;