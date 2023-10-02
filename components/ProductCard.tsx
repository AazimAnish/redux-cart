import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';


interface ProductCardProps {
  name: string;
  imageSrc: string;
  price: number;
}

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, imageSrc, price }) => {

  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="#">
        <div className="h-44 relative">
          <Image
            className="rounded-t-lg"
            src={imageSrc}
            alt="product image"
            layout="fill"
          />
        </div>
      </Link>
      <div className="px-5 pb-5">
        <Link href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white h-16 ">
            {name}
          </h5>
        </Link>
        <div className="flex items-center justify-between mt-6">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${price.toFixed(2)}</span>
          <button
            onClick={() => dispatch(addToCart({ name, imageSrc, price, quantity: 1 }))}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
