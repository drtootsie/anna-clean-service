'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Camera } from 'lucide-react';

const SHOWCASE_ITEMS = [
  {
    id: 1,
    image: '/gallery/FullSizeRender-1.jpeg',
    title: 'Sparkling Kitchen Refresh',
    category: 'Kitchen',
    detail: 'Degreased range, sanitized countertops, polished fixtures & spotless sink',
  },
  {
    id: 2,
    image: '/gallery/FullSizeRender-3.jpeg',
    title: 'Pristine Bathroom Sanitation',
    category: 'Bathroom',
    detail: 'Gleaming mirrors, soap-scum free glass, disinfected vanity & tile',
  },
  {
    id: 3,
    image: '/gallery/FullSizeRender-5.jpeg',
    title: 'Living Room Reset',
    category: 'Living Area',
    detail: 'Hand-wiped baseboards, detailed dusting, and refreshed upholstery',
  },
  {
    id: 4,
    image: '/gallery/FullSizeRender-7.jpeg',
    title: 'Master Bedroom Sanity',
    category: 'Bedrooms',
    detail: 'Dust-free blinds, pristine furniture surfaces & crisp carpet lines',
  },
  {
    id: 5,
    image: '/gallery/FullSizeRender-9.jpeg',
    title: 'Streak-Free Hardwood Care',
    category: 'Floors',
    detail: 'High-filtration vacuuming followed by safe, streak-free damp mopping',
  },
  {
    id: 6,
    image: '/gallery/FullSizeRender-11.jpeg',
    title: 'Appliance & Surface Detail',
    category: 'Appliances',
    detail: 'Fingerprint-free stainless steel, polished stovetops & exterior cabinets',
  },
];

const CATEGORIES = ['All', 'Kitchen', 'Bathroom', 'Living Area', 'Bedrooms', 'Floors'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? SHOWCASE_ITEMS
    : SHOWCASE_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Real Homes Cleaned by Anna</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Work & Real Results
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Every home is cleaned with authentic attention to detail, hospital-grade care, and gentle, non-toxic products.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Category Pill */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-blue-900 font-bold text-xs px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                  <span>{item.category}</span>
                </div>
                {/* Verified Clean Badge */}
                <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md text-white font-bold text-xs px-2.5 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Anna Inspected</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Guarantee Banner */}
        <div className="mt-16 bg-white border border-blue-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-base sm:text-lg">100% Owner-Inspected Guarantee</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                Anna personally cleans or inspects every home to ensure nothing is overlooked.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-colors shadow-sm flex-shrink-0"
          >
            Calculate Your Home's Clean ↓
          </a>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
