"use client"

import Link from 'next/link';
import Cart from '../../components/Cart';
import RootLayout from '../../components/RootLayout';
import Dashboard from '../../components/Dashoard';

function App() {
  return (
    <RootLayout>
      {/* <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a>Cart</a>
            </Link>
          </li>
        </ul>
      </nav> */}
      <main>
        <Dashboard />
        <Cart />
      </main>
    </RootLayout>
  );
}

export default App;