'use client';

import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';

const SMS_BODY = encodeURIComponent("Hi Ana! I found your website and would love to get a quote for cleaning my home.");

const FloatingCallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2.5 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="tel:9137317373"
          className="flex-1 inline-flex items-center justify-center py-3 px-3 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-900 font-bold text-xs sm:text-sm rounded-xl transition-colors border border-gray-200"
          aria-label="Call Ana at (913) 731-7373"
        >
          <Phone className="w-4 h-4 mr-1.5 text-blue-600 flex-shrink-0" />
          <span>Call Ana</span>
        </a>

        <a
          href={`sms:+19137317373?&body=${SMS_BODY}`}
          className="flex-1 inline-flex items-center justify-center py-3 px-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors"
          aria-label="Text Ana for a fast cleaning quote"
        >
          <MessageSquare className="w-4 h-4 mr-1.5 flex-shrink-0" />
          <span>Text for Quote</span>
        </a>

        <a
          href="#contact"
          className="inline-flex items-center justify-center p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-colors"
          aria-label="Online Estimate Builder"
          title="Instant Estimate Builder"
        >
          <Sparkles className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default FloatingCallBar;
