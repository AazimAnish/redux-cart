// // pages/cart.tsx
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, removeFromCart } from '../redux/cartSlice';
// import CartItem from '../components/CartItem';

// const CartPage: React.FC = () => {
//   const cartItems = useSelector((state: RootState) => state.cart);
//   const dispatch = useDispatch();

//   const handleRemoveFromCart = (productId: number) => {
//     dispatch(removeFromCart(productId));
//   };

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cartItems.map((item) => (
//             <CartItem
//               key={item.id}
//               product={item}
//               onRemove={handleRemoveFromCart}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
