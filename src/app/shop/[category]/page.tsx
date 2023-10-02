"use client"

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ProductCard } from '../../../../components';
import { Product } from '../../../../components/ProductCard';


const CategoryPage = () => {
  const params = useParams();
  const { category } = params as { category: string };
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (category) {
      // Fetch products based on the category from the API
      fetch(`https://fakestoreapi.com/products/category/${category}`) // Use the relative path to your API route
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          return response.json();
        })
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    }
  }, [category]);


  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
        Products in Category: {category}
      </h1>
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

export default CategoryPage;
