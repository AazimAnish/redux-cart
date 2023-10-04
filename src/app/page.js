"use client";

import Cart from '../../components/Cart'
import Dashboard from '../../components/Dashoard'
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from '../../components/RootLayout';

function App() {
  const rotuer = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );
  return (  
    <div className="App">
      <RouterProvider router={rotuer} />
    </div>
  )
}

export default App;