
import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface ProductGridProps {
  title: string;
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, products }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="shop">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <div className="h-1 w-20 bg-black"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="block group">
            <ProductCard
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
            />
          </Link>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link 
          to="/browse" 
          className="inline-flex items-center justify-center rounded-md bg-black px-8 py-3 text-white hover:bg-black/90 transition-colors"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default ProductGrid;
