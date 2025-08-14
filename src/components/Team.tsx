import React, { useState } from 'react';
import {Github, Link, Linkedin, Mail, Star, Award, Zap, Users, Heart, Sparkles } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Mr.Thanathip Premnirandon",
      role: "Full Stack Developer & UX/UI Designer",
      bio: "A web developer with over 10 years of experience working in large organizations worldwide, focused on creating and designing websites.",
      image: "https://avatars.githubusercontent.com/u/140483668?v=4",
      expertise: ["React", "Node.js", "UI/UX", "TypeScript"],
      achievements: "10+ Years",
      social: {
        portfolio: "https://oganesson018.github.io/my-portfolio/",
        github: "https://github.com/oganesson018",
        linkedin: "https://linkedin.com/in/thanathip-premnirandon"
      }
    },
    {
      name: "Mr.Phukrit Kittinontana",
      role: "CTO & Co-Founder",
      bio: "Innovative AI/ML expert and technology leader, known for pioneering solutions that transform industries. PhD from DII CAMT CMU.",
      image: "https://avatars.githubusercontent.com/u/188324414?s=400&u=c8f6123baa34b9b35e1837724544f7782798a52a&v=4",
      expertise: ["AI/ML", "Leadership", "PhD", "Innovation"],
      achievements: "PhD DII CAMT CMU",
      social: {
        github: "https://github.com/phukrit7171/",
        portfolio: "https://phukrit7171.github.io/phukrit7171/",
        linkedin: "https://linkedin.com/in/phukrit-kittinontana"
      }
    },
    {
      name: "Mr.Mothana Laohatangsakul",
      role: "Head of Development",
      bio: "Head of the Development team at this company for over 8 years, dedicated to building high-quality solutions that meet client needs.",
      image: "https://avatars.githubusercontent.com/u/188391456?v=4",
      expertise: ["Team Leadership", "Architecture", "Quality", "Strategy"],
      achievements: "8+ Years",
      social: {
        portfolio: "https://momoekub.github.io/Portfolio/",
        github: "https://github.com/Momoekub",
        linkedin: "https://linkedin.com/in/mothana-laohatangsakul"
      }
    },
    {
      name: "Mr.Kunanan Wongsing",
      role: "VP of Engineering",
      bio: "Full-stack architect specializing in distributed systems and real-time analytics platforms.",
      image: "https://portfolio1-nine-ebon.vercel.app/me.jpg",
      expertise: ["Distributed Systems", "Analytics", "Architecture", "Real-time"],
      achievements: "VP Engineering",
      social: {
        portfolio: "https://portfolio1-nine-ebon.vercel.app/",
        github: "https://github.com/StellarBearX",
        linkedin: "https://linkedin.com/in/kunanan-wongsing"
      }
    },
    {
      name: "Ms.Nattharin Arnatthanankul",
      role: "Front-End Developer",
      bio: "Front-End Developer creating responsive and user-friendly web experiences with modern technologies.",
      image: "https://avatars.githubusercontent.com/u/196073644?v=4",
      expertise: ["React", "Vue.js", "CSS", "JavaScript"],
      achievements: "Web Expert",
      social: {
        portfolio: "https://pin-nattharin.github.io/portfolio/",
        github: "https://github.com/pin-nattharin",
        linkedin: "https://linkedin.com/in/nattharin-arnatthanankul"
      }
    },
    {
      name: "Mr.Photsawee Tantiwattanachaikul",
      role: "UX/UI Designer",
      bio: "UX/UI Designer focused on creating simple, user-friendly designs that improve digital experiences.",
      image: "https://avatars.githubusercontent.com/u/220499250?v=4",
      expertise: ["UI Design", "UX Research", "Prototyping", "Figma"],
      achievements: "Design Pro",
      social: {
        portfolio: "https://mphotsawee.github.io/Portfolio/",
        github: "https://github.com/Mphotsawee",
        linkedin: "https://linkedin.com/in/photsawee-tantiwattanachaikul"
      }
    }
  ];

  return (
    <section id="team" className="py-40 px-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-emerald-500/8 to-teal-500/8 rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] bg-gradient-to-br from-orange-500/8 to-red-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating particles with different sizes and colors */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-70 shadow-lg shadow-cyan-400/50"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-blue-400 rounded-full animate-float delay-1000 opacity-60 shadow-lg shadow-blue-400/50"></div>
        <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-purple-400 rounded-full animate-float delay-2000 opacity-80 shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float delay-3000 opacity-50 shadow-lg shadow-pink-400/50"></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-emerald-400 rounded-full animate-float delay-500 opacity-40 shadow-lg shadow-emerald-400/50"></div>
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-orange-400 rounded-full animate-float delay-1500 opacity-60 shadow-lg shadow-orange-400/50"></div>
        
        {/* Animated lines */}
        <div className="absolute top-1/4 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-32 animate-fade-in-up">
          {/* Decorative elements */}
          <div className="flex justify-center items-center mb-8 space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-white mb-10 leading-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 animate-pulse">Team</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-8">
            Visionary leaders and innovative minds driving the future of business automation
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mt-12">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Users size={24} />
              <span className="text-lg font-semibold">6 Experts</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2 text-blue-400">
              <Award size={24} />
              <span className="text-lg font-semibold">50+ Years Combined</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Zap size={24} />
              <span className="text-lg font-semibold">100+ Projects</span>
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-8 space-x-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          </div>
        </div>

        {/* Enhanced Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
                          <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 250}ms` }}
              >
              {/* Card Container */}
              <div className="glass-card p-10 rounded-3xl group-hover:scale-105 transition-all duration-700 animate-fade-in-up relative overflow-hidden h-full">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Achievement Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full border border-amber-400/30 backdrop-blur-sm">
                    <Star size={10} className="text-amber-400" />
                    <span className="text-xs font-medium text-amber-400 max-w-[80px] truncate">{member.achievements}</span>
                  </div>
                </div>
                
                {/* Profile Image Container */}
                <div className="relative mb-10">
                  <div className="w-36 h-36 mx-auto rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-500 relative">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-blue-400/30 to-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Image */}
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover relative z-10"
                    />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-cyan-400/50">
                    <Sparkles size={16} className="text-white" />
                  </div>
                </div>
                
                {/* Member Info */}
                <div className="text-center mb-8 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  {/* Role Badge */}
                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10 rounded-full border border-cyan-400/20 mb-6 backdrop-blur-sm">
                    <p className="text-cyan-400 font-semibold text-sm">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-full text-xs text-gray-300 border border-gray-600/30 backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Social Links */}
                <div className="flex justify-center space-x-4 relative z-10">
                  {member.social.portfolio && (
                    <a 
                      href={member.social.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group/social hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-blue-400/20 hover:border-cyan-400/30"
                    >
                      <Link size={22} className="text-gray-400 group-hover/social:text-cyan-400 transition-colors duration-300" />
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group/social hover:bg-gradient-to-r hover:from-blue-400/20 hover:to-purple-400/20 hover:border-blue-400/30"
                    >
                      <Github size={22} className="text-gray-400 group-hover/social:text-blue-400 transition-colors duration-300" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group/social hover:bg-gradient-to-r hover:from-purple-400/20 hover:to-pink-400/20 hover:border-purple-400/30"
                    >
                      <Linkedin size={22} className="text-gray-400 group-hover/social:text-purple-400 transition-colors duration-300" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Join Team CTA */}
        <div className="mt-40 text-center animate-fade-in-up">
          <div className="glass-card p-16 rounded-3xl max-w-4xl mx-auto relative overflow-hidden">
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
              
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Join Our Growing Team
              </h3>
              <p className="text-gray-300 mb-10 text-xl leading-relaxed max-w-3xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation and excellence. 
                Be part of something extraordinary and help us shape the future of technology.
              </p>
              
              {/* Stats */}
              <div className="flex justify-center items-center space-x-8 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                  <div className="text-gray-400 text-sm">Open Positions</div>
                </div>
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-gray-400 text-sm">Remote Friendly</div>
                </div>
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>
              
              <button className="btn-primary text-xl px-12 py-6 rounded-3xl hover:scale-105 transition-transform duration-300 shadow-2xl shadow-cyan-400/25">
                <Heart size={24} className="mr-3" />
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
