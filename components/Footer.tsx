import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center">
            <Link href="/" className="flex items-center">
                <Image
                  src="/logo.jpg"
                  alt="logo"
                  width={118}
                  height={18}
                  className="object-contain"
                />
            </Link>
            <p className="text-sm ml-4">
              © 2023 Ecommerce Site. All rights reserved.
            </p>
          </div>

          <ul className="flex mt-4 md:mt-0">
            <li className="mr-6">
              <Link href="/about">
                About Us
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/contact">
                Contact Us
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Footer;
