import React from 'react';
import { Home, Zap, ArrowLeftRight, Layout, Check } from 'lucide-react';

const services = [
  {
    title: 'Standard Residential Cleaning',
    description: 'Perfect for maintaining a consistently clean home. Includes dusting, vacuuming, mopping, and surface sanitization.',
    icon: Home,
    features: ['Dusting all surfaces', 'Floor vacuuming & mopping', 'Kitchen & Bathroom sanitizing', 'Trash removal'],
  },
  {
    title: 'Deep Cleaning',
    description: 'A comprehensive top-to-bottom refresh. We tackle the hidden dirt and grime in hard-to-reach places.',
    icon: Zap,
    features: ['Baseboards & trim', 'Inside window sills', 'Deep appliance cleaning', 'Cabinet exteriors'],
  },
  {
    title: 'Move-In / Move-Out',
    description: 'Designed to get a home ready for its next chapter. We ensure the space is spotless and welcoming.',
    icon: ArrowLeftRight,
    features: ['Full interior cleaning', 'Inside cabinets & drawers', 'Inside oven & fridge', 'Detailed floor care'],
  },
  {
    title: 'Space Organization',
    description: 'Helping you declutter and optimize your living spaces for better functionality and peace of mind.',
    icon: Layout,
    features: ['Closet organization', 'Pantry sorting', 'Decluttering advice', 'Systematic storage solutions'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">What We Offer</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Comprehensive Cleaning Services
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Tailored cleaning solutions to fit your lifestyle and needs in Kansas City.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-gray-100 text-left"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-blue-50 text-blue-600">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-gray-500">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-blue-600 rounded-2xl shadow-xl text-white">
          <div className="md:flex items-center justify-between text-left">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need a custom cleaning plan?</h3>
              <p className="text-blue-100">Contact us today for a free estimate based on your specific requirements.</p>
            </div>
            <a
              href="#contact"
              className="mt-6 md:mt-0 inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
