import React from 'react';
import { ShieldCheck, Clock, Sparkles, HeartHandshake } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Clean and organized home"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 p-7 rounded-2xl shadow-xl hidden md:block text-white max-w-xs">
              <p className="font-black text-3xl mb-1">Spotless Care</p>
              <p className="text-blue-100 text-xs uppercase tracking-wider font-semibold">Save Time • Reduce Stress • Enjoy Home</p>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Experience the Difference</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              A Trusted Partner for a Fresh, Pristine Home
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              Anna Clean Service is dedicated to creating a spotless, fresh, and comfortable living environment for families across Greater Kansas City. We help you save time and eliminate stress so you can relax in a healthy sanctuary.
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Unlike large franchises that send different unfamiliar faces each week, Anna personally oversees and cleans your residence. Our work is defined by dependability, meticulous attention to detail, and hospital-grade sanitization using family- and pet-safe products.
            </p>
            
            <div className="mt-10 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-blue-50 text-blue-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-bold text-gray-900">Trustworthy & Reliable Every Visit</h3>
                  <p className="mt-1 text-sm text-gray-600">We treat your home and belongings with the utmost respect, building lasting relationships grounded in integrity.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-blue-50 text-blue-600">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-bold text-gray-900">Always Punctual & Consistent</h3>
                  <p className="mt-1 text-sm text-gray-600">We honor your busy schedule. We arrive on time, communicate clearly, and clean thoroughly without taking shortcuts.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-blue-50 text-blue-600">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-bold text-gray-900">100% Satisfaction Guarantee</h3>
                  <p className="mt-1 text-sm text-gray-600">If any spot is not cleaned to your complete satisfaction, notify us within 24 hours and we'll re-clean it free of charge.</p>
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
