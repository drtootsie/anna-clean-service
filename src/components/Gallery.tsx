'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Camera, ExternalLink } from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const SHOWCASE_ITEMS = [
  {
    id: 1,
    image: '/gallery/nextdoor/post2.jpeg',
    title: 'Gleaming Kitchen & Countertop Reset',
    category: 'Kitchen',
    detail: 'Sanitized granite/quartz, degreased stovetop, polished backsplash & fixtures',
    badge: 'Nextdoor Featured',
  },
  {
    id: 2,
    image: '/gallery/curated/IMG_0313.jpg',
    title: 'Open-Concept Living & Dining Refresh',
    category: 'Living Area',
    detail: 'Detailed dusting, hand-cleaned baseboards, and pristine natural-light surfaces',
    badge: 'Ana Inspected',
  },
  {
    id: 3,
    image: '/gallery/curated/IMG_0316.jpg',
    title: 'Pristine Bathroom Tile & Vanity',
    category: 'Bathroom',
    detail: 'Streak-free mirrors, sanitized sinks, soap-scum elimination & polished chrome',
    badge: 'Ana Inspected',
  },
  {
    id: 4,
    image: '/gallery/curated/IMG_0595.jpg',
    title: 'Immaculate Hardwood & Living Area',
    category: 'Floors',
    detail: 'HEPA vacuumed and streak-free damp mopped hardwood for a deep, healthy shine',
    badge: 'Ana Inspected',
  },
  {
    id: 5,
    image: '/gallery/nextdoor/post3.jpg',
    title: 'Cozy Family Room Deep Detail',
    category: 'Living Area',
    detail: 'Under-cushion vacuuming, lint removal, window sills & dust-free shelving',
    badge: 'Nextdoor Featured',
  },
  {
    id: 6,
    image: '/gallery/curated/IMG_0600.jpg',
    title: 'Sunlit Kitchen Island & Cabinetry',
    category: 'Kitchen',
    detail: 'Wiped cabinet faces, polished stainless steel range, and sanitized countertops',
    badge: 'Ana Inspected',
  },
  {
    id: 7,
    image: '/gallery/curated/IMG_0317.jpg',
    title: 'Master Suite Sanity & Bedroom Reset',
    category: 'Bedrooms',
    detail: 'Crisp bed presentation, furniture polish, vacuumed corners & fresh air feeling',
    badge: 'Ana Inspected',
  },
  {
    id: 8,
    image: '/gallery/curated/IMG_0598.jpg',
    title: 'Great Room & Hardwood Transition',
    category: 'Floors',
    detail: 'Precision vacuum edging, baseboards wiped clean, zero residue left behind',
    badge: 'Ana Inspected',
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
            <span>Authentic Work in Kansas City Homes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Work & Real Results
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Every home is personally cleaned and inspected by Ana to guarantee hospital-grade sanitization and gentle, pet-safe care.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-blue-900 font-bold text-[11px] px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                  <span>{item.category}</span>
                </div>
                {/* Verified Clean Badge */}
                <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-md text-white font-bold text-[11px] px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{item.badge}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-gray-900 text-base mb-1.5 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Callout */}
        <div className="mt-12 p-6 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 border border-pink-200/60 rounded-3xl flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 text-base">Follow Ana on Instagram</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                Catch recent Kansas City home transformations, before-and-after reels, and weekly cleaning tips.
              </p>
            </div>
          </div>
          <a
            href="https://instagram.com/anna_cleanser"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm flex-shrink-0"
          >
            <InstagramIcon className="w-4 h-4 mr-2" />
            <span>@anna_cleanser</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-80" />
          </a>
        </div>

        {/* Quality Guarantee Banner */}
        <div className="mt-8 bg-white border border-blue-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-base sm:text-lg">100% Owner-Inspected Guarantee</h4>
              <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                Ana personally cleans or inspects every home to ensure nothing is overlooked.
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
