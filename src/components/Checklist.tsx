'use client';

import React, { useState } from 'react';
import { Check, Sparkles, Home, Layers } from 'lucide-react';

const ROOMS = [
  {
    id: 'all',
    name: 'All Rooms',
    standard: [
      'Dust all reachable horizontal surfaces',
      'Vacuum carpets, area rugs, and stairs',
      'Sweep and damp-mop hard surface floors',
      'Empty all wastebaskets & replace liners',
      'Straighten cushions and tidy light clutter',
      'Wipe down light switches and door handles',
    ],
    deep: [
      'Everything in Standard Clean, PLUS:',
      'Hand-wipe baseboards, trim, and crown molding',
      'Detailed dusting of ceiling fans, blinds, and vents',
      'Wipe interior doors and door frames',
      'Vacuum under lightweight furniture and beds',
      'Spot-clean walls and remove scuffs/fingerprints',
    ]
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    standard: [
      'Scrub and sanitize sink & polish faucets',
      'Disinfect countertops and backsplashes',
      'Wipe exterior of appliances (stove, fridge, dishwasher)',
      'Clean microwave interior and exterior',
      'Wipe down table and chairs',
      'Vacuum and thoroughly mop kitchen floor',
    ],
    deep: [
      'Everything in Standard Clean, PLUS:',
      'Hand-wipe exterior cabinet fronts and drawer faces',
      'Scrub stovetop grates and burners deeply',
      'Detailed clean inside range hood and grease filter area',
      'Wipe top of refrigerator and kick plates',
      'Sanitize trash can inside and out',
    ]
  },
  {
    id: 'bathrooms',
    name: 'Bathrooms',
    standard: [
      'Scrub, disinfect, and rinse bathtub & shower stall',
      'Clean and sanitize toilet bowl, seat, and base',
      'Disinfect vanity counters, sink, and chrome fixtures',
      'Polish mirrors to a streak-free shine',
      'Shake out bath mats and vacuum/mop floors',
      'Empty trash and wipe container',
    ],
    deep: [
      'Everything in Standard Clean, PLUS:',
      'Detailed scrub of tile grout and mineral buildup',
      'Deep descaling of shower doors and tracks',
      'Hand-wipe bathroom baseboards and trim',
      'Clean exterior and top of vanity cabinets',
      'Sanitize exhaust fan covers and light fixtures',
    ]
  },
  {
    id: 'bedrooms',
    name: 'Bedrooms & Living',
    standard: [
      'Dust dressers, nightstands, and tables',
      'Make beds and tidy throw pillows (linens if left out)',
      'Vacuum carpets, rugs, and underneath accessible edges',
      'Mop wood or tile floors',
      'Wipe mirrors and glass picture frames',
      'Empty trash',
    ],
    deep: [
      'Everything in Standard Clean, PLUS:',
      'Detailed dusting of lampshades, picture frames, and decor',
      'Hand-clean all baseboards and window sills',
      'Dust window blinds slat-by-slat',
      'Vacuum sofa cushions and underneath furniture',
      'Wipe down interior door frames and closet doors',
    ]
  }
];

const Checklist = () => {
  const [activeRoom, setActiveRoom] = useState('all');
  const currentRoom = ROOMS.find(r => r.id === activeRoom) || ROOMS[0];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Room-by-Room Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What's Included in Your Clean
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Compare our Standard Maintenance Clean vs. our Comprehensive Deep Clean checklist.
          </p>

          {/* Room Selector Tabs */}
          <div className="mt-8 inline-flex p-1.5 bg-gray-100 rounded-2xl flex-wrap justify-center gap-1">
            {ROOMS.map((room) => (
              <button
                key={room.id}
                onClick={() => setActiveRoom(room.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeRoom === room.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Standard Clean Box */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Maintenance
                </span>
                <span className="text-xs bg-gray-200 text-gray-700 font-semibold px-2.5 py-1 rounded-full">
                  Weekly / Bi-Weekly
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Clean</h3>
              <p className="text-sm text-gray-600 mb-6">
                Ideal for keeping a maintained home pristine, fresh, and disinfected on a recurring basis.
              </p>
              
              <ul className="space-y-3.5">
                {currentRoom.standard.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-700">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center px-6 py-3 rounded-xl border-2 border-gray-300 font-bold text-gray-800 hover:bg-gray-200 transition-colors text-sm"
              >
                Choose Standard Clean
              </a>
            </div>
          </div>

          {/* Deep Clean Box */}
          <div className="bg-blue-50/50 rounded-3xl p-8 border-2 border-blue-500 flex flex-col justify-between shadow-lg relative">
            <div className="absolute -top-3.5 right-6 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
              Recommended for 1st Clean
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Deep Transformation
                </span>
                <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2.5 py-1 rounded-full">
                  Top-to-Bottom
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Deep Clean Refresh</h3>
              <p className="text-sm text-gray-600 mb-6">
                Intensive scrub that tackles years of buildup, baseboards, vents, appliances, and hidden grime.
              </p>
              
              <ul className="space-y-3.5">
                {currentRoom.deep.map((item, idx) => {
                  const isHeader = item.startsWith('Everything in');
                  return (
                    <li 
                      key={idx} 
                      className={`flex items-start text-sm ${isHeader ? 'font-bold text-blue-900 pb-1' : 'text-gray-800'}`}
                    >
                      <div className={`h-5 w-5 rounded-full ${isHeader ? 'bg-blue-600 text-white' : 'bg-green-100 text-green-700'} flex items-center justify-center mr-3 flex-shrink-0 mt-0.5`}>
                        {isHeader ? <Sparkles className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5" />}
                      </div>
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-200 text-center">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors text-sm shadow-md"
              >
                Choose Deep Clean
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Checklist;