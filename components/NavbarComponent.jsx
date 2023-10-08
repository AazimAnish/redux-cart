import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

function NavbarComponent() {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <Navbar className="fixed top-0 w-full bg-white shadow-md" expand="lg" style={{ padding: "10px 0", height: "auto" }}>
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold text-indigo-600 mx-6" style={{ fontSize: "1.5rem" }}>
              REDUX CART
          </Link>
          <div className="flex">
            <Link href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Products
            </Link>
            <Link href="/cart" className="relative flex items-center">
                <div className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <span className="flex items-center">
                    My Bag
                    <span className="ml-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                      {cartProducts.length}
                    </span>
                  </span>
                </div>
            </Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
