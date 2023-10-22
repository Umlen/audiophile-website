'use client'

import { useState, useEffect } from 'react';

import header from '@/styles/header-and-nav.module.scss';
import checkout from '@/styles/checkout.module.scss';

import Header from '@/Components/Header';
import CheckoutSummary from '@/Components/checkout/CheckoutSummary';
import CheckoutForm from '@/Components/checkout/CheckoutForm';
import CompletedOrder from '@/Components/checkout/CompletedOrder';
import Footer from '@/Components/Footer';
import GreyLink from '@/Components/ui/GreyLink';

function Checkout() {
  const [isCashPay, setIsCashPay] = useState(false);
  const [cartItems, setCartItems] = useState(undefined);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  function cashPayToggler() {
    setIsCashPay(prevIsCashPay => !prevIsCashPay);
  }

  function orderStateToggler() {
    setIsOrderComplete(true);
  }

  return (
    <>
      <div className={`lrPaddingContainer ${header.headerWrapper}`}>
        <Header />
      </div>
      <main className={`lrPaddingContainer ${checkout.mainContainer}`}>
        {isOrderComplete && <CompletedOrder cartItems={cartItems} />}
        <GreyLink 
          href='/'
          text='Go Back'
        />
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

export default Checkout;