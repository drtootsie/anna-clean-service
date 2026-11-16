'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

const FAQS = [
  {
    q: 'Do you bring your own cleaning supplies and equipment?',
    a: 'Yes, absolutely! We bring our own professional-grade equipment, fresh microfiber cloths, high-filtration vacuums, and eco-friendly, non-toxic cleaning supplies. If you have specific surfaces (like unsealed marble or antique hardwood) or preferred products, we are also happy to use what you provide.'
  },
  {
    q: 'Do I need to be home while you clean?',
    a: 'Not at all! Many of our clients are at work, running errands, or enjoying their day. You can provide entry instructions (such as a garage code, lockbox, or key location) in complete confidence. We are fully insured, bonded, and treat your home with the utmost security and respect.'
  },
  {
    q: 'Are your cleaning products pet and kid-safe?',
    a: 'Yes, 100%. We choose gentle yet effective non-toxic formulas that sanitize thoroughly without leaving harsh chemical fumes or residues behind, keeping your children and furry family members safe.'
  },
  {
    q: 'What is your 100% Satisfaction Guarantee?',
    a: 'Your peace of mind is our highest priority. If you notice any area that was not cleaned to your complete satisfaction, simply notify us within 24 hours and we will return to re-clean the area free of charge—no questions asked.'
  },
  {
    q: 'How do you determine the price for a clean?',
    a: 'Our pricing is customized to your home size (bedrooms/bathrooms), square footage, condition, and cleaning frequency. We provide upfront, transparent estimates with zero hidden fees and no long-term contracts.'
  },
  {
    q: 'What areas in Kansas City do you serve?',
    a: 'We proudly serve homeowners across the Greater Kansas City metro, including Overland Park, Leawood, Prairie Village, Mission Hills, Olathe, Lenexa, Shawnee, and Kansas City.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Everything you need to know about our home cleaning services, scheduling, and guarantee.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-5 px-6 text-left flex justify-between items-center bg-gray-50/50 hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-gray-900 text-base sm:text-lg pr-4">
                    {faq.q}
                  </span>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center bg-white border border-gray-200 text-blue-600 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180 bg-blue-50 border-blue-200' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 bg-white text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <div>
            <h4 className="font-bold text-blue-900 text-base">Have a specific question not listed here?</h4>
            <p className="text-xs sm:text-sm text-blue-700 mt-0.5">Call or text Anna directly—we respond quickly to all questions.</p>
          </div>
          <a
            href="tel:9137317373"
            className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-colors shadow-sm flex-shrink-0"
          >
            <PhoneCall className="w-4 h-4 mr-2" />
            (913) 731-7373
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;