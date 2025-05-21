import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center bg-black overflow-hidden">
      {/* Traditional Rwandan pattern overlay */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <div className="relative w-full h-full">
          {/* Semi-circular triangular pattern row 1 */}
          <div className="flex justify-center w-full absolute top-10">
            {[...Array(20)].map((_, i) => (
              <div 
                key={`pattern-1-${i}`} 
                className="w-20 h-10 border-t-[3px] border-l-[3px] border-r-[3px] border-[#403E43] rounded-t-full mx-[-1px]"
              />
            ))}
          </div>
          
          {/* Semi-circular triangular pattern row 2 (inverted) */}
          <div className="flex justify-center w-full absolute top-20">
            {[...Array(20)].map((_, i) => (
              <div 
                key={`pattern-2-${i}`} 
                className="w-20 h-10 border-b-[3px] border-l-[3px] border-r-[3px] border-[#403E43] rounded-b-full mx-[-1px]"
              />
            ))}
          </div>
          
          {/* Repeating pattern at bottom */}
          <div className="flex justify-center w-full absolute bottom-20">
            {[...Array(20)].map((_, i) => (
              <div 
                key={`pattern-3-${i}`} 
                className="w-20 h-10 border-t-[3px] border-l-[3px] border-r-[3px] border-[#403E43] rounded-t-full mx-[-1px]"
              />
            ))}
          </div>
          
          {/* Repeating pattern at bottom (inverted) */}
          <div className="flex justify-center w-full absolute bottom-10">
            {[...Array(20)].map((_, i) => (
              <div 
                key={`pattern-4-${i}`} 
                className="w-20 h-10 border-b-[3px] border-l-[3px] border-r-[3px] border-[#403E43] rounded-b-full mx-[-1px]"
              />
            ))}
          </div>
          
          {/* Diagonal zigzag pattern */}
          <div className="absolute left-0 top-1/3 w-full h-[2px] bg-[#333333] transform rotate-1"></div>
          <div className="absolute left-0 top-2/3 w-full h-[2px] bg-[#333333] transform -rotate-1"></div>
        </div>
      </div>
      
      {/* Content remains the same */}
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
      
      {/* Keep the gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.3),rgba(0,0,0,0.8))]"></div>
    </section>
  );
};

export default Hero;
