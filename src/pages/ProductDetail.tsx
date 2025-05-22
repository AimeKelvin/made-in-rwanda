
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MinusIcon, PlusIcon, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description?: string;
  features?: string[];
  details?: Record<string, string>;
  relatedImages?: string[];
}

const productsData: Product[] = [
  {
    id: "1",
    name: "Agaseke Basket",
    category: "HOME",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800",
    description: "Hand-woven in the traditional spiral technique, these baskets represent peace and unity in Rwandan culture. Each basket is meticulously crafted from locally sourced sisal fibers and sweet grass, taking days to complete. The intricate patterns and vibrant colors are inspired by Rwanda's lush landscapes and rich cultural heritage.",
    features: [
      "Handmade in Rwanda by skilled artisans",
      "Made from natural sisal fibers and sweet grass",
      "Durable and ethically sourced materials",
      "Each piece is unique with slight variations in pattern and color",
      "Supports traditional craftsmanship and local communities"
    ],
    details: {
      "Dimensions": "10\" diameter x 8\" height",
      "Materials": "Sisal fibers, sweet grass",
      "Care": "Spot clean with damp cloth; avoid prolonged exposure to moisture",
      "Origin": "Rwanda, East Africa"
    },
    relatedImages: [
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1616046120292-583a8b9b8c2d?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "2",
    name: "Imigongo Art Piece",
    category: "ART",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=800",
    description: "Imigongo is a distinctive art form unique to Rwanda, characterized by its bold geometric patterns created using cow dung as a natural material. This traditional art dates back over 200 years, with designs passed down through generations. Each piece is hand-painted by skilled artisans using natural earth pigments, resulting in striking black and white contrasts with occasional accent colors.",
    features: [
      "Authentic Rwandan Imigongo art",
      "Handcrafted using traditional techniques",
      "Created with natural materials and earth pigments",
      "Geometric patterns with cultural significance",
      "Ready to hang with mounting hardware included"
    ],
    details: {
      "Dimensions": "16\" x 16\"",
      "Materials": "Wood panel, natural earth pigments",
      "Care": "Dust with soft cloth, avoid direct sunlight",
      "Origin": "Eastern Province, Rwanda"
    },
    relatedImages: [
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1598908314732-07113901949e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Find the product with the matching ID
  const product = productsData.find((p) => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/browse")}>
              Browse All Products
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
    
    // In a real app, this would update the cart state
  };

  const handleBuyNow = () => {
    // Add to cart and redirect to checkout
    toast({
      title: "Proceeding to Checkout",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
    
    // In a real app, this would update the cart state and redirect
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <div className="text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <a href="/browse" className="hover:underline">Shop</a>
            <span className="mx-2">/</span>
            <a href={`/category/${product.category.toLowerCase()}`} className="hover:underline">
              {product.category}
            </a>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden bg-gray-50">
                <img 
                  src={product.relatedImages?.[selectedImage] || product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {product.relatedImages && product.relatedImages.length > 1 && (
                <div className="flex gap-2">
                  {product.relatedImages.map((image, index) => (
                    <button
                      key={index}
                      className={`border-2 ${
                        selectedImage === index 
                          ? "border-black" 
                          : "border-transparent hover:border-gray-300"
                      } w-20 h-20`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h2 className="text-sm text-muted-foreground font-medium mb-1">
                  {product.category}
                </h2>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {product.name}
                </h1>
                <div className="text-2xl font-bold mb-6">
                  ${product.price.toFixed(2)}
                </div>
                
                <p className="mb-6">
                  {product.description}
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Quantity</h3>
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handleDecreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handleIncreaseQuantity}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Add to Cart / Buy Now buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  variant="outline" 
                  className="flex-1" 
                  size="lg"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button 
                  className="flex-1" 
                  size="lg"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </Button>
              </div>
              
              <div className="space-y-4">
                {/* Free shipping notice */}
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4" />
                  <p>Free shipping on orders over $100</p>
                </div>
                
                {/* Ethically sourced notice */}
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4" />
                  <p>Ethically produced by local artisans</p>
                </div>
                
                {/* Support notice */}
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4" />
                  <p>Your purchase supports Rwandan communities</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <Tabs defaultValue="features">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="details">Product Details</TabsTrigger>
                <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="pt-6">
                <ul className="space-y-2">
                  {product.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="details" className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.details && Object.entries(product.details).map(([key, value], idx) => (
                    <div key={idx}>
                      <h4 className="font-medium">{key}</h4>
                      <p className="text-muted-foreground">{value}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="shipping" className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Shipping</h4>
                    <p className="text-muted-foreground">Orders are typically processed within 1-2 business days. Standard shipping takes 5-7 business days. Free shipping on orders over $100.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Returns</h4>
                    <p className="text-muted-foreground">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Customer is responsible for return shipping costs unless item is defective.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
