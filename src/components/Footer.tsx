import React from 'react';
import { TrendingUp, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                MoneyTree
              </span>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Empowering investors with cutting-edge technology and comprehensive education to navigate the Indian stock market with confidence.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Trading Platform</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Education</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Trading</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Open Account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Fund Transfer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Market Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Trading Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Referral Program</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Partner With Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="ml-3 text-gray-400 text-sm">
                  MoneyTree Tower, Financial District, Mumbai 400051, India
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="ml-3 text-gray-400 text-sm">+91 1800 123 4567</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="ml-3 text-gray-400 text-sm">support@moneytree.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 MoneyTree. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap space-x-4">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Cookie Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Disclaimer</a>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-gray-800 rounded-lg text-xs text-gray-400 text-center">
          <p>
            Disclaimer: Trading in securities market is subject to market risks. Read all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;