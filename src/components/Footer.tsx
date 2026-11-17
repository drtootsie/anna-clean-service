import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const NEXTDOOR_URL = "https://nextdoor.com/page/house-cleaning-kansas-city-ks-2?init_source=search&query=anna+clean+service&referrer=nextdoor";
const INSTAGRAM_URL = "https://instagram.com/anna_cleanser";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-black text-blue-400 mb-4 block">Ana Clean Service</span>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed text-sm">
              More than just cleaning houses, Ana Clean Service is dedicated to caring for your space, ensuring an impeccable environment that brings comfort and peace to your family across Greater Kansas City.
            </p>
            <div className="flex items-center space-x-3">
              <a 
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Instagram"
                className="h-10 w-10 bg-gray-800 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-colors text-white"
              >
                <InstagramIcon size={20} />
              </a>
              <a 
                href={NEXTDOOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Nextdoor Neighborhood Favorite"
                className="h-10 px-3 bg-gray-800 hover:bg-emerald-600 rounded-xl flex items-center space-x-2 transition-colors text-white text-xs font-bold"
              >
                <img 
                  src="https://img.icons8.com/color/48/000000/nextdoor.png" 
                  alt="Nextdoor" 
                  className="w-4 h-4" 
                />
                <span>Nextdoor Fave</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-6 text-white uppercase tracking-wider text-xs">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#checklist" className="hover:text-blue-400 transition-colors">What's Included</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Before & After Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Neighbor Reviews</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Book Free Estimate</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-6 text-white uppercase tracking-wider text-xs">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="tel:9137317373" className="flex items-center hover:text-blue-400 transition-colors">
                  <Phone size={18} className="mr-3 text-blue-400 flex-shrink-0" />
                  <span>(913) 731-7373</span>
                </a>
              </li>
              <li>
                <a href="mailto:annacleanservice3@gmail.com" className="flex items-center hover:text-blue-400 transition-colors">
                  <Mail size={18} className="mr-3 text-blue-400 flex-shrink-0" />
                  <span className="truncate">annacleanservice3@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-3 text-blue-400 flex-shrink-0" />
                <span>Kansas City, KS & Johnson County</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs gap-4">
          <p>© {new Date().getFullYear()} Ana Clean Service. 2025 Nextdoor Neighborhood Favorite Award Winner.</p>
          <p>Licensed & Insured Residential House Cleaning across Greater Kansas City.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
