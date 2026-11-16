import React from 'react';
import { ArrowRight, CheckCircle, Star, Phone, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-24 pb-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6954?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-blue-950/65 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          {/* Trust Badge Top */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-md text-blue-200 text-xs sm:text-sm font-semibold mb-6">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-white font-bold">5.0 Star Rated</span>
            <span className="text-blue-300">•</span>
            <span>Overland Park & Greater KC</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1]">
            Exceptional Detail. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
              Authentic Clean.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-blue-100/90 mb-8 max-w-2xl leading-relaxed">
            Experience the peace of mind that comes from a spotless home. Anna personally cleans and inspects every residence with hospital-grade thoroughness and gentle, eco-friendly care.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base sm:text-lg font-bold rounded-2xl text-blue-900 bg-white hover:bg-blue-50 shadow-2xl transition-all transform hover:-translate-y-0.5 hover:shadow-blue-500/30"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 w-5 h-5 text-blue-600" />
            </a>
            
            <a
              href="tel:9137317373"
              className="inline-flex items-center justify-center px-7 py-4 border-2 border-white/40 backdrop-blur-sm text-base sm:text-lg font-bold rounded-2xl text-white hover:bg-white/10 transition-all"
            >
              <Phone className="mr-2 w-5 h-5 text-blue-300" />
              (913) 731-7373
            </a>
          </div>
          
          {/* Three Key Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/15 max-w-xl text-white">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-white">100%</span>
              <span className="text-xs sm:text-sm text-blue-200 font-medium">Satisfaction Guarantee</span>
            </div>
            <div className="flex flex-col border-l border-white/20 pl-4">
              <span className="text-2xl sm:text-3xl font-black text-white">Zero</span>
              <span className="text-xs sm:text-sm text-blue-200 font-medium">Contracts or Fees</span>
            </div>
            <div className="flex flex-col border-l border-white/20 pl-4">
              <span className="text-2xl sm:text-3xl font-black text-white">Owner</span>
              <span className="text-xs sm:text-sm text-blue-200 font-medium">Cleaned & Inspected</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
