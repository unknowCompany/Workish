import React from 'react';
import {Github, Link } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Mr.Thanathip Premnirandon",
      role: "Full Stack Develop & UX/UI Designer",
      bio: "A web developer with over 10 years of experience working in large organizations worldwide, focused on creating and designing websites.",
      image: "https://avatars.githubusercontent.com/u/140483668?v=4",
      social: {
        portfolio: "https://oganesson018.github.io/my-portfolio/",
        github: "https://github.com/oganesson018"
      }
    },
    {
      name: "Mr.Phukrit Kittinontana",
      role: "CTO & Co-Founder",
      bio: "Innovative AI/ML expert and technology leader, known for pioneering solutions that transform industries. PhD from DII CAMT CMU.",
      image: "https://avatars.githubusercontent.com/u/188324414?s=400&u=c8f6123baa34b9b35e1837724544f7782798a52a&v=4",
      social: {

        github: "https://github.com/phukrit7171/",
        portfolio: "https://phukrit7171.github.io/phukrit7171/"
      }
    },
    {
      name: "Mr.Mothana Laohatangsakul",
      role: "Head of Head of Development",
      bio: "Head of the Development team at this company for over 8 years, dedicated to building high-quality solutions that meet client needs.",
      image: "https://avatars.githubusercontent.com/u/188391456?v=4",
      social: {
        portfolio: "https://momoekub.github.io/Portfolio/",
        github: "https://github.com/Momoekub"
      }
    },
    {
      name: "Mr.Kunanan Wongsing",
      role: "VP of Engineering",
      bio: "Full-stack architect specializing in distributed systems and real-time analytics platforms.",
      image: "https://portfolio1-nine-ebon.vercel.app/me.jpg",
      social: {
        portfolio: "https://portfolio1-nine-ebon.vercel.app/",
        github: "https://github.com/StellarBearX"
      }
      
    },
    {
      name: "Ms.Nattharin Arnatthanankul",
      role: "Front-End Developer",
      bio: "Front-End Developer creating responsive and user-friendly web experiences.",
      image: "https://avatars.githubusercontent.com/u/196073644?v=4",
      social: {
        portfolio: "https://pin-nattharin.github.io/portfolio/",
        github: "https://github.com/pin-nattharin"
      }
    },
    {
      name: "Mr.Photsawee Tantiwattanachaikul",
      role: "UX/UI Designer",
      bio: "UX/UI Designer focused on creating simple, user-friendly designs that improve digital experiences.",
      image: "https://avatars.githubusercontent.com/u/220499250?v=4",
      social: {
        portfolio: "https://mphotsawee.github.io/Portfolio/",
        github: "https://github.com/Mphotsawee"
      }
    }
  ];

  return (
    <section id="team" className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-gray-800 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visionary leaders and innovative minds driving the future of business automation
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-cyan-400 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {member.social.portfolio && (
                  <a 
                    href={member.social.portfolio}
                    className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group/social"
                  >
                    <Link size={18} className="text-gray-400 group-hover/social:text-cyan-400" />
                  </a>
                )}
                {member.social.twitter && (
                  <a 
                    href={member.social.twitter}
                    className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group/social"
                  >
                    <Github size={18} className="text-gray-400 group-hover/social:text-cyan-400" />
                  </a>
                )}
                {member.social.github && (
                  <a 
                    href={member.social.github}
                    className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group/social"
                  >
                    <Github size={18} className="text-gray-400 group-hover/social:text-cyan-400" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 text-center animate-fade-in-up">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <button className="btn-primary">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
