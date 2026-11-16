'use client';

import React from 'react';
import { Phone, Calendar } from 'lucide-react';

const FloatingCallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 shadow-2xl flex items-center gap-2">
      <a
        href="tel:9137317373"
        className="flex-1 inline-flex items-center justify-center py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-bold text-sm rounded-xl shadow-md transition-colors"
      >
        <Phone className="w-4 h-4 mr-2" />
        Call (913) 731-7373
      </a>
      <a
        href="#contact"
        className="flex-1 inline-flex items-center justify-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md transition-colors"
      >
        <Calendar className="w-4 h-4 mr-2" />
        Free Estimate
      </a>
    </div>
  );
};

export default FloatingCallBar;