import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6954?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>Trusted Professional Cleaning in Kansas City</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Exceptional Thoroughness. <span className="text-blue-200">Authentic Clean.</span>
          </h1>
          <p className="text-xl text-blue-50 mb-8 leading-relaxed">
            Experience the peace of mind that comes from a truly clean home. Anna Clean Service provides detailed, reliable, and professional residential cleaning tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-blue-700 bg-white hover:bg-blue-50 shadow-xl transition-all transform hover:-translate-y-1"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-bold rounded-lg text-white hover:bg-white/10 transition-all"
            >
              Our Services
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-8 text-white/90">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">100%</span>
              <span className="text-sm">Satisfaction</span>
            </div>
            <div className="h-8 w-px bg-white/30" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold">Free</span>
              <span className="text-sm">Estimates</span>
            </div>
            <div className="h-8 w-px bg-white/30" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold">Reliable</span>
              <span className="text-sm">& Detailed</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
