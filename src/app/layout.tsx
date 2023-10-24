import { type Metadata } from 'next';
import { type FunctionComponent } from 'react';
import { Manrope } from 'next/font/google';
import '@/styles/global.scss';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Audiophile',
  description: 'Audiophile online store',
  icons: {
    icon: '/favicon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

const RootLayout: FunctionComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
