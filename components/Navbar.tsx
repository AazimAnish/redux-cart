import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '../public/assets';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between'>
      <Link href="/" className="flex items-center" passHref>
        <Image
          src={Logo}
          alt="Logo"
          width={50}
          height={50}
          className="obeject-cover"
        />
        <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
          Rhythamo
        </span>
      </Link>

      <div className="flex gap-x-4 mx-2">
        <Link href="/">Home</Link>
        <Link href="/products">Shop</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;