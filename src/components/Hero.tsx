import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
     <section
      className="relative h-[100vh] md:h-[90vh] flex items-center justify-center bg-black bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
    

      {/* Main content */}
      <div className="absolute w-full h-full flex flex-col items-center justify-center px-4">
        <h1 className="hero-text text-white text-5xl md:text-7xl lg:text-9xl font-extrabold text-center mb-6 animate-fade-in">
          MADE IN
          <br />
          <span className="block mt-2">RWANDA</span>
        </h1>
        <p className="text-white text-lg md:text-xl max-w-lg text-center mb-8 font-light">
          Discover authentic craftsmanship and cultural heritage through our curated collection
        </p>
       {/*
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.3),rgba(0,0,0,0.8))] z-10"></div>
        */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-md px-8">
            Shop Now
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white bg-white/10 rounded-md px-8">
            Explore Artisans
          </Button>
        </div>
      </div>

        </section>
  );
};

export default Hero;
