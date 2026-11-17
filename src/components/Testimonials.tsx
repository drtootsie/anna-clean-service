import React from 'react';
import { Star, Quote, Award, ExternalLink } from 'lucide-react';

const NEXTDOOR_URL = "https://nextdoor.com/page/house-cleaning-kansas-city-ks-2?init_source=search&query=anna+clean+service&referrer=nextdoor";

const testimonials = [
  {
    name: 'Jai M.',
    location: 'Olathe, KS',
    quote: 'Ana and her team completed a deep clean of my home and they were fabulous! I was totally impressed by the thoroughness and thoughtfulness in the detailed care they each showed. I highly recommend Ana and will certainly use her again!',
    rating: 5,
    tag: 'Verified Neighbor',
  },
  {
    name: 'K. K.',
    location: 'Olathe, KS',
    quote: 'We had Ana out to do a deep clean on our house in preparation to get onto a routine cleaning schedule. Her deep clean was extremely thorough and I am amazed at the results. When she was done, the house smelled amazing and looked better than it has, maybe ever. If you are looking for house cleaning at a reasonable price by a hardworking team I can’t recommend her enough!',
    rating: 5,
    tag: 'Verified Neighbor',
  },
  {
    name: 'Shannon H.',
    location: 'Long-Time Client',
    quote: 'Ana has been cleaning my home for several years. She is reliable, trustworthy, quick with communication and does a great job. I’m very happy with her quality of work and great attitude. I highly recommend her.',
    rating: 5,
    tag: 'Long-Time Client',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 text-blue-50 opacity-50">
          <Quote size={200} />
        </div>
        
        <div className="text-center relative z-10 max-w-3xl mx-auto">
          {/* Nextdoor Award Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>🏆 Nextdoor Neighborhood Favorite Award Winner (2025)</span>
          </div>

          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Real Client Reviews</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Neighbors Say
          </p>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Real feedback from verified homeowners across Johnson County and Greater Kansas City.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50/80 p-8 rounded-3xl border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                    {t.tag}
                  </span>
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed text-sm sm:text-base">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200/70">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Nextdoor Social Proof Link */}
        <div className="mt-12 text-center">
          <a
            href={NEXTDOOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-6 py-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-emerald-900 font-bold text-sm transition-all shadow-sm group"
          >
            <img 
              src="https://img.icons8.com/color/48/000000/nextdoor.png" 
              alt="Nextdoor" 
              className="w-5 h-5" 
            />
            <span>View Verified Recommendations on Nextdoor Kansas City</span>
            <ExternalLink className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
