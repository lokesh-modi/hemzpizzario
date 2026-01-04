import React from 'react';
import { Facebook, Instagram, Twitter, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Hemz Pizzario Logo" className="h-14 w-auto mr-3 rounded-full p-1" />
              <h3 className="text-2xl font-bold text-red-500">Hemz Pizzario</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Serving the best Italian & Indian fusion pizzas in Vesu, Surat.
              Fresh ingredients, authentic flavors, unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/menu" className="text-gray-300 hover:text-white transition-colors">Menu</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/J1bRmaUz3T44g8oG7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm"
                >
                  UG-1, Safal Square, Udhana-Magdalla Rd, Vesu, Surat
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-gray-300">+91 9227011218</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-gray-300">info@hemzpizzario.com</span>
              </div>
            </div>
          </div>

          {/* Hours & Offers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours & Offers</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 text-sm">Mon - Sun: 11:00 AM - 11:00 PM</p>
              </div>
              <div className="bg-green-600 p-3 rounded-lg">
                <p className="text-white font-semibold text-sm">Buy 1 Get 1 Free</p>
                <p className="text-green-100 text-xs">Every Tuesday & Thursday</p>
              </div>
              <a
                href="https://www.swiggy.com/restaurants/hemz-pizzario-safal-square-koramangala-surat-972541/dineout?is_retargeting=true&media_source=GoogleReserve&utm_campaign=GoogleMap&utm_source=GoogleReserve"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Book Table
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Hemz Pizzario. All rights reserved. |
            <a href="#" className="hover:text-white ml-1">Privacy Policy</a> |
            <a href="#" className="hover:text-white ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;