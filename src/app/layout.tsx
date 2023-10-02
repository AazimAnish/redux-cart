import './globals.css'
import type { Metadata } from 'next'
import store from '../../redux/store';
import { Providers } from '../../redux/provider';

import { Navbar, Footer } from '../../components';

export const metadata: Metadata = {
  title: 'Rhythamo',
  description: 'Music for the soul',
};

export default function RootLayout({
   children
   }: {
     children: React.ReactNode
     }) {
  return (
    <html lang='en'>
      <body className='relative mx-4'>
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
