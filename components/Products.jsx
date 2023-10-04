import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/CartSlice";
import { getProducts } from "../store/productSlice";
import Image from "next/image";


const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "failed") {
    return <div>Something went wrong</div>;
  }

  const cards = products.map((product) => {
    return (
      <div className="col-md-3 mb-4" key={product.id}>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-center items-center">
            <Image
              src={product.image}
              alt={product.title}
              className="w-40 h-52 object-cover"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-700">INR : {product.price}</p>
            <button
              onClick={() => {
                addToCartHandler(product);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container mx-auto mt-8 pt-24">
      <h1 className="text-3xl font-semibold mb-4">Products Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards}
      </div>
    </div>
  );
};

export default Products;
