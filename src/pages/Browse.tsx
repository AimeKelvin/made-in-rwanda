
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import ProductCard from "@/components/ProductCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  tags?: string[];
}

const productsData: Product[] = [
  {
    id: "1",
    name: "Agaseke Basket",
    category: "HOME",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800",
    tags: ["basket", "handcrafted", "traditional"]
  },
  {
    id: "2",
    name: "Imigongo Art Piece",
    category: "ART",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=800",
    tags: ["wall art", "geometric", "black and white"]
  },
  {
    id: "3",
    name: "Kitenge Laptop Bag",
    category: "ACCESSORIES",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800",
    tags: ["bag", "fabric", "colorful"]
  },
  {
    id: "4",
    name: "Handwoven Table Runner",
    category: "HOME",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&q=80&w=800",
    tags: ["textile", "handwoven", "table decor"]
  },
  {
    id: "5",
    name: "Intore Earrings",
    category: "JEWELRY",
    price: 28.00,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
    tags: ["jewelry", "traditional", "handmade"]
  },
  {
    id: "6",
    name: "Kivu Coffee Beans",
    category: "FOOD",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1598908314732-07113901949e?auto=format&fit=crop&q=80&w=800",
    tags: ["coffee", "organic", "fair trade"]
  },
  {
    id: "7",
    name: "Kitenge Throw Pillow",
    category: "HOME",
    price: 32.00,
    image: "https://images.unsplash.com/photo-1616046120292-583a8b9b8c2d?auto=format&fit=crop&q=80&w=800",
    tags: ["pillow", "home decor", "fabric"]
  },
  {
    id: "8",
    name: "Rwandan Ceramic Mug",
    category: "HOME",
    price: 22.00,
    image: "https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?auto=format&fit=crop&q=80&w=800",
    tags: ["ceramics", "kitchenware", "handmade"]
  }
];

const Browse = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 150]);
  const [sort, setSort] = useState("featured");
  
  // Get unique categories
  const categories = Array.from(
    new Set(productsData.map((product) => product.category))
  );

  // Filter products based on search term, categories, and price range
  useEffect(() => {
    let filtered = [...productsData];
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((product) => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags?.some(tag => 
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) => 
        selectedCategories.includes(product.category)
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    if (sort === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === "name-asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    setProducts(filtered);
  }, [searchTerm, selectedCategories, priceRange, sort]);

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handlePriceRangeChange = (values: number[]) => {
    setPriceRange(values);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setPriceRange([0, 150]);
    setSort("featured");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Shop All Products</h1>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Filters */}
            <div className="hidden md:block w-64 space-y-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Search</h3>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search products..." 
                    className="pl-8" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      />
                      <Label 
                        htmlFor={`category-${category}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">Price</h3>
                  <span className="text-sm">${priceRange[0]} - ${priceRange[1]}</span>
                </div>
                <Slider
                  defaultValue={[0, 150]}
                  min={0}
                  max={150}
                  step={5}
                  value={priceRange}
                  onValueChange={handlePriceRangeChange}
                  className="py-4"
                />
              </div>
              
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
            </div>
            
            {/* Mobile Filters */}
            <div className="md:hidden flex justify-between items-center mb-4">
              <div className="relative flex-1 mr-2">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search products..." 
                  className="pl-8" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-lg">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                      Filter products by category and price
                    </SheetDescription>
                  </SheetHeader>
                  <div className="space-y-8 py-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Categories</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`mobile-category-${category}`}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => handleCategoryChange(category)}
                            />
                            <Label 
                              htmlFor={`mobile-category-${category}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {category}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-lg">Price</h3>
                        <span className="text-sm">${priceRange[0]} - ${priceRange[1]}</span>
                      </div>
                      <Slider
                        defaultValue={[0, 150]}
                        min={0}
                        max={150}
                        step={5}
                        value={priceRange}
                        onValueChange={handlePriceRangeChange}
                        className="py-4"
                      />
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        className="flex-1" 
                        onClick={clearFilters}
                      >
                        Clear All
                      </Button>
                      <SheetClose asChild>
                        <Button className="flex-1">Apply Filters</Button>
                      </SheetClose>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            <div className="flex-1 space-y-6">
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Showing {products.length} products
                </p>
                
                <Select value={sort} onValueChange={setSort}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sort By</SelectLabel>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="name-asc">Name: A to Z</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    category={product.category}
                    price={product.price}
                    image={product.image}
                  />
                ))}
              </div>
              
              {products.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">No products found</h3>
                  <p className="text-muted-foreground mt-2">
                    Try changing your search or filter criteria
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4" 
                    onClick={clearFilters}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Browse;
