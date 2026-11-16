import React from 'react';
import { MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

const CITIES = [
  { name: 'Overland Park', zip: '66213, 66212, 66223...' },
  { name: 'Leawood', zip: '66206, 66209, 66211...' },
  { name: 'Prairie Village', zip: '66208, 66207...' },
  { name: 'Mission Hills', zip: '66208...' },
  { name: 'Olathe', zip: '66061, 66062...' },
  { name: 'Lenexa', zip: '66215, 66219...' },
  { name: 'Shawnee', zip: '66216, 66217...' },
  { name: 'Kansas City', zip: 'Metro KS & MO' },
];

const ServiceAreas = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Local & Neighborhood-Focused</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Proudly Serving Greater Kansas City
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Dedicated residential cleaning across Johnson County and surrounding communities.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CITIES.map((city, idx) => (
            <div 
              key={idx}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-blue-300 transition-all text-center flex flex-col items-center justify-center"
            >
              <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-base">{city.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{city.zip}</p>
            </div>
          ))}
        </div>

        {/* ZIP Code Strip like annacleans */}
        <div className="mt-10 bg-white rounded-2xl p-6 border border-gray-200 text-center shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
            Priority Johnson County & Kansas City ZIP Codes
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['66213', '66212', '66208', '66209', '66206', '66211', '66215', '66219', '66216', '66062', '66061', '64114', '64113'].map((zip) => (
              <span key={zip} className="px-3 py-1 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 text-xs font-mono font-semibold rounded-lg border border-gray-200 transition-colors">
                {zip}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            <span>Free travel within service radius</span>
          </div>
          <div className="flex items-center">
            <ShieldCheck className="w-4 h-4 text-blue-600 mr-2" />
            <span>Fully Licensed & Insured</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            <span>Same cleaner every visit</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceAreas;