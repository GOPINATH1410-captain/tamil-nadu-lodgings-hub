
import { Building2, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">G Homes</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for finding quality accommodations across Tamil Nadu.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">PG Hostels</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Houses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Hostels</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Lodges</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Districts</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Chennai</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Coimbatore</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Madurai</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Salem</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 G Homes. All rights reserved. | Serving all 32 districts of Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
