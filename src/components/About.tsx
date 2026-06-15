import React from 'react';
import { ShieldCheck, Clock, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Clean and organized home"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-white font-bold text-4xl mb-1">Detailed</p>
              <p className="text-blue-100 text-sm uppercase tracking-wider">Care in Every Corner</p>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">About Anna Clean Service</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Your Partner in a Fragrant, Organized Home
            </p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We understand that your home is your sanctuary. That's why Anna Clean Service goes beyond the superficial clean. Our mission is to provide you with a space that doesn't just look clean, but feels truly refreshed.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Serving the Kansas City community with dedication and professionalism, we pride ourselves on our punctuality, attention to detail, and the personal care we bring to every job.
            </p>
            
            <div className="mt-10 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Trustworthy & Reliable</h3>
                  <p className="mt-1 text-gray-600">We treat your home with the utmost respect and care, building long-term relationships based on trust.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Always Punctual</h3>
                  <p className="mt-1 text-gray-600">We value your time. We arrive on schedule and work efficiently without compromising on quality.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <Sparkles className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Exceptional Results</h3>
                  <p className="mt-1 text-gray-600">From sanitizing kitchens to detailed floor care, we make sure every surface sparkles and shines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
