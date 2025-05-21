
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CategoryProps {
  title: string;
  image: string;
  description: string;
}

const categories: CategoryProps[] = [
  {
    title: "Traditional Crafts",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800",
    description: "Handwoven baskets, pottery, and wood carvings that showcase Rwanda's rich cultural heritage."
  },
  {
    title: "Modern Fashion",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
    description: "Contemporary clothing and accessories made with traditional fabrics and techniques."
  },
  {
    title: "Home Decor",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",
    description: "Beautiful decor items that bring Rwandan artistry and craftsmanship into your home."
  },
  {
    title: "Art & Collectibles",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=800",
    description: "Unique art pieces and collectibles created by Rwanda's talented artists."
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <div className="h-1 w-20 bg-black"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <Card key={category.title} className="overflow-hidden border-0 rounded-none shadow-md bg-white h-full">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                <Button variant="link" className="p-0 h-auto text-black font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
