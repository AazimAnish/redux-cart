"use client"

import { useEffect, useState } from 'react';
import { ProductCard } from '../../../components';
import { fetchProducts } from '../api/products';
import { Product } from '../../../components/ProductCard';

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Products</h1>
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

export default ShopPage;
