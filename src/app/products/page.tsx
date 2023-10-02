"use client"

import { useEffect, useState } from 'react';
import { ProductCard } from '../../../components';

// Define the type for a product
interface Product {
  id: number;
  title: string;
  image: string; // Add other properties as needed
  price: number;
}

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]); // Explicitly define the type as an array of Product

  useEffect(() => {
    // Fetch products in the "jewelry" category with a limit of 10
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h1>Jewelry Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
          key={product.id}
          name={product.title}
          imageSrc={product.image}
          price={product.price}
        />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
