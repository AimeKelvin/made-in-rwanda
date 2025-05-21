
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-4 z-10">
        <h1 className="hero-text text-white text-5xl md:text-7xl lg:text-9xl text-center mb-6 animate-fade-in">
          MADE IN
          <br />
          <span className="block mt-2">RWANDA</span>
        </h1>
        <p className="text-white text-lg md:text-xl max-w-lg text-center mb-8 font-light">
          Discover authentic craftsmanship and cultural heritage through our curated collection
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-none px-8">
            Shop Now
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-none px-8">
            Explore Artisans
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.3),rgba(0,0,0,0.8))]"></div>
    </section>
  );
};

export default Hero;
