import React from 'react';
import { CategoryCard } from '.';
import { categoryContent } from '../constants';

const Category = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
        Explore Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoryContent.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
