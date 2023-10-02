import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { categoryContent } from './constants';

interface CategoryCardProps {
  name: string;
  image: StaticImageData;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, name }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/category/${name}`}>
          <div className={`relative h-64`}>
            <Image
              src={image}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </div>
      </Link>
    </div>
  );
};


const AllCategories = () => {
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

export default AllCategories;
