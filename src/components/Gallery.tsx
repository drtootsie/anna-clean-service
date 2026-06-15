import React from 'react';
import Image from 'next/image';

const galleryImages = [
  { before: '/gallery/FullSizeRender.jpeg', after: '/gallery/FullSizeRender-1.jpeg', label: 'Kitchen Deep Clean' },
  { before: '/gallery/FullSizeRender-2.jpeg', after: '/gallery/FullSizeRender-3.jpeg', label: 'Bathroom Refresh' },
  { before: '/gallery/FullSizeRender-4.jpeg', after: '/gallery/FullSizeRender-5.jpeg', label: 'Living Area' },
  { before: '/gallery/FullSizeRender-6.jpeg', after: '/gallery/FullSizeRender-7.jpeg', label: 'Bedroom Details' },
  { before: '/gallery/FullSizeRender-8.jpeg', after: '/gallery/FullSizeRender-9.jpeg', label: 'Floor Care' },
  { before: '/gallery/FullSizeRender-10.jpeg', after: '/gallery/FullSizeRender-11.jpeg', label: 'Appliance Cleaning' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Real Results</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Before & After Gallery
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            See the transformative power of a professional clean.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {galleryImages.map((item, index) => (
            <div key={index} className="space-y-4">
              <div className="relative group overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
                <div className="flex h-full">
                  <div className="w-1/2 relative">
                    <img 
                      src={item.before} 
                      alt={`${item.label} Before`}
                      className="w-full h-full object-cover grayscale-[50%]"
                    />
                    <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded">Before</div>
                  </div>
                  <div className="w-1/2 relative">
                    <img 
                      src={item.after} 
                      alt={`${item.label} After`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-blue-600 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded">After</div>
                  </div>
                </div>
              </div>
              <h3 className="text-center font-bold text-gray-800">{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
