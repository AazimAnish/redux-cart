import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart);
  const removeFromTheCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const cards = cartProducts.map((product) => {
    return (
      <div className="col-md-3 mb-4" key={product.id}>
        <Card className="h-100 border border-gray-300">
          <div className="p-3 flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "130px" }}
              className="rounded-full"
            />
          </div>
          <Card.Body>
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">INR: {product.price}</p>
          </Card.Body>
          <Card.Footer className="bg-white">
            <button
              onClick={() => {
                removeFromTheCart(product.id);
              }}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Remove from Cart
            </button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <div className="App mx-5">
      <h1 className="text-2xl font-bold mt-2">Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
        {cards}
      </div>
    </div>
  );
};

export default Cart;
