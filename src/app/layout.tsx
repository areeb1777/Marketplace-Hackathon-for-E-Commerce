'use client';

import React, { ReactNode } from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import TopNav from '@/components/TopNavbar';
import Footer from '@/components/Footer';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || ''}>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" href="/images/room.png" as="image" />
          <link rel="preload" href="/images/poplar-sofa.png" as="image" />
        </head>
        <body>
          <CartProvider>
            <TopNav />
            {children}
            <Footer />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
