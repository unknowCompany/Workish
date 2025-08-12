import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
              Workish
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Revolutionizing business operations with intelligent automation and cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Github].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                >
                  <Icon size={18} className="text-gray-400 group-hover:text-cyan-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-bold mb-6">Products</h4>
            <ul className="space-y-3">
              {['PoS System', 'Sales Automation', 'Logistics Management', 'Analytics Dashboard', 'API Integration'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Press', 'Partners', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-cyan-400" />
                <span className="text-gray-400">hello@workish.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-cyan-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-cyan-400" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Workish. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
