
import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MADE IN RWANDA</h3>
            <p className="text-gray-400 mb-4">
              Preserving heritage through authentic Rwandan craftsmanship, supporting local artisans and promoting sustainable practices.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white">Traditional Crafts</a></li>
              <li><a href="#" className="hover:text-white">Modern Fashion</a></li>
              <li><a href="#" className="hover:text-white">Home Decor</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Artisans</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">News & Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Kigali, Rwanda</li>
              <li>info@madeinrwanda.com</li>
              <li>+250 788 123 456</li>
            </ul>
            
            <h3 className="text-lg font-bold mt-6 mb-2">Subscribe to our newsletter</h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-white/10 text-white placeholder:text-gray-400 border-0 focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button className="bg-white text-black px-3 py-2 font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MADE IN RWANDA. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white">Shipping</a>
            <a href="#" className="text-gray-400 hover:text-white">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
