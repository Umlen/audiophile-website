import { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import header from '@/styles/header-and-nav.module.scss';
import typography from '@/styles/typography.module.scss';
import checkout from '@/styles/checkout.module.scss';

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import CheckoutSummary from '@/Components/checkout/CheckoutSummary';
import CheckoutForm from '@/Components/checkout/CheckoutForm';
import CompletedOrder from '@/Components/checkout/CompletedOrder';


function Home() {
  const [isCashPay, setIsCashPay] = useState(false);
  const [cartItems, setCartItems] = useState(undefined);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('cart')));
  }, []);

  function cashPayToggler() {
    setIsCashPay(prevIsCashPay => !prevIsCashPay);
  }

  function orderStateToggler() {
    setIsOrderComplete(true);
  }

  return (
    <>
      <Head>
        <title>Audiophile - Checkout</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={`lrPaddingContainer ${header.headerWrapper}`}>
        <Header />
      </div>
      <main className={`lrPaddingContainer ${checkout.mainContainer}`}>
        {isOrderComplete && <CompletedOrder cartItems={cartItems} />}
        <Link href='/' className={`blackLink goBackLink ${typography.baseText}`}>
          Go Back
        </Link>
        <div className={checkout.gridContainer}>
          <CheckoutForm 
            isCashPay={isCashPay} 
            cashPayToggler={cashPayToggler} 
            cartItems={cartItems} 
            orderStateToggler={orderStateToggler}
          />
          <CheckoutSummary isCashPay={isCashPay} cartItems={cartItems} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;