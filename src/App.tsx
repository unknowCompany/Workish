import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Technology from './components/Technology';
import Benefits from './components/Benefits';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  useEffect(() => {
    // Smooth scrolling parallax effect with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          // Parallax slow elements
          const parallaxSlowElements = document.querySelectorAll('.parallax-slow');
          parallaxSlowElements.forEach((element) => {
            const speed = 0.3;
            const yPos = -(scrollY * speed);
            (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
          });
          
          // Parallax medium elements
          const parallaxMediumElements = document.querySelectorAll('.parallax-medium');
          parallaxMediumElements.forEach((element) => {
            const speed = 0.6;
            const yPos = -(scrollY * speed);
            (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
          });
          
          // Parallax fast elements
          const parallaxFastElements = document.querySelectorAll('.parallax-fast');
          parallaxFastElements.forEach((element) => {
            const speed = 0.9;
            const yPos = -(scrollY * speed);
            (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right');
    animatedElements.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services />
      <Technology />
      <Benefits />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;