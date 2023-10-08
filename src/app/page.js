"use client"

import Link from 'next/link';
import Cart from '../../components/Cart';
import RootLayout from '../../components/RootLayout';
import Dashboard from '../../components/Dashoard';
import NavbarComponent from '../../components/NavbarComponent';

function App() {
  return (
      <div>
        <NavbarComponent />
        <Dashboard />
      </div>
  )
}

export default App;