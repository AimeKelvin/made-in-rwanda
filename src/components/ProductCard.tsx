
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, category, price, image }) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-none rounded-none transition-transform">
      <div className="overflow-hidden">
        <div className="aspect-square bg-gray-100 relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <CardContent className="pt-4 pb-2 px-1">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500 uppercase">{category}</p>
            <h3 className="text-lg font-semibold">{name}</h3>
          </div>
          <div className="text-right">
            <p className="font-semibold">${price.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-1 pt-0">
        <Button
          onClick={handleAddToCart}
          variant="outline"
          className="w-full flex items-center gap-2 rounded-none border-black hover:bg-black hover:text-white transition-colors"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
