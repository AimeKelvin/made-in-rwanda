
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const productsData = [
  {
    id: "1",
    name: "Agaseke Basket",
    category: "HOME",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    name: "Imigongo Art Piece",
    category: "ART",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    name: "Kitenge Laptop Bag",
    category: "ACCESSORIES",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "4",
    name: "Handwoven Table Runner",
    category: "HOME",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "5",
    name: "Intore Earrings",
    category: "JEWELRY",
    price: 28.00,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "6",
    name: "Kivu Coffee Beans",
    category: "FOOD",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1598908314732-07113901949e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "7",
    name: "Kitenge Throw Pillow",
    category: "HOME",
    price: 32.00,
    image: "https://images.unsplash.com/photo-1616046120292-583a8b9b8c2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "8",
    name: "Rwandan Ceramic Mug",
    category: "HOME",
    price: 22.00,
    image: "https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?auto=format&fit=crop&q=80&w=800"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ProductGrid title="Best Sellers" products={productsData} />
      
      <section className="py-16 bg-black text-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Rwandan Craftsmanship</h2>
              <p className="mb-4">
                Each item in our collection is handcrafted by skilled artisans who blend traditional techniques with contemporary design, creating unique pieces that tell the story of Rwanda's rich cultural heritage.
              </p>
              <p className="mb-6">
                By purchasing from MADE IN RWANDA, you're supporting local communities and helping to preserve traditional craft skills for future generations.
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-none px-8">
                Learn More
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800" 
                  alt="Rwandan Craftsmanship" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square bg-white/10 translate-y-8">
                <img 
                  src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=800" 
                  alt="Rwandan Art" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square bg-white/10 -translate-y-8">
                <img 
                  src="https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&q=80&w=800" 
                  alt="Rwandan Textiles" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square bg-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800" 
                  alt="Rwandan Accessories" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts />
      
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Rwanda to Your Doorstep</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Join our community of conscious shoppers who appreciate authentic craftsmanship and the stories behind each product.
          </p>
          <Button size="lg" className="bg-black hover:bg-black/80 rounded-none px-8">
            Shop All Products
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
