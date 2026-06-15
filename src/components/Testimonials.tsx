import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Mission Hills',
    quote: 'Anna is incredible! Her attention to detail is unmatched. I’ve had many cleaners over the years, but Anna’s thoroughness is on another level. My house smells amazing every time.',
    rating: 5,
  },
  {
    name: 'Robert T.',
    location: 'Prairie Village',
    quote: 'Very professional and punctual. She really cares about the work she does, and it shows. The organization service she provided for my pantry was a life-saver.',
    rating: 5,
  },
  {
    name: 'Elena G.',
    location: 'Overland Park',
    quote: 'I highly recommend Anna Clean Service. She is trustworthy, hard-working, and always leaves my home sparkling. Truly the best cleaning service in KC.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 text-blue-50 opacity-50">
          <Quote size={200} />
        </div>
        
        <div className="text-center relative z-10">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Neighbors Say
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 flex items-center justify-center">
            <img src="https://img.icons8.com/color/48/000000/nextdoor.png" alt="Nextdoor" className="w-6 h-6 mr-2 grayscale opacity-50" />
            Top Rated on Nextdoor Kansas City
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
