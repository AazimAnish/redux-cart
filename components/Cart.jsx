import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);

  const removeFromTheCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="mx-5 mt-16"> {/* Add top margin here */}
      <h1 className="text-2xl font-bold mt-2">Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
        {cartProducts.map((product) => (
          <div key={product.id}>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-40 h-52 object-cover rounded-full"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-gray-600">INR: {product.price}</p>
                <button
                  onClick={() => {
                    removeFromTheCart(product.id);
                  }}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
