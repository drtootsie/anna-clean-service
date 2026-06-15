import React from 'react';
import { Phone, Mail, MapPin, Globe, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-blue-400 mb-6 block">Anna Clean Service</span>
            <p className="text-gray-400 max-w-sm mb-6">
              Providing professional, thorough, and reliable cleaning services to the Kansas City community. We treat every home with the care and attention it deserves.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-blue-400" />
                (913) 731-7373
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-blue-400" />
                anna.clean.service@gmail.com
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-3 text-blue-400" />
                Kansas City, KS
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Anna Clean Service. All rights reserved.</p>
          <p className="mt-2">Professional House Cleaning in Kansas City, KS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
