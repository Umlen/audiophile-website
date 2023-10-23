'use client'

import { useState, FunctionComponent, useEffect } from 'react';
import { ProductInCartType } from '@/types/types';
import { getLocalStorageCart } from '@/utils/utilsCart';

import Header from '@/Components/Header';
import CheckoutSummary from '@/Components/checkout/CheckoutSummary';
import CheckoutForm from '@/Components/checkout/CheckoutForm';
import CompletedOrder from '@/Components/checkout/CompletedOrder';
import Footer from '@/Components/Footer';
import GreyLink from '@/Components/ui/GreyLink';

import stylesHeader from '@/styles/header.module.scss';
import stylesCheckout from '@/styles/checkout.module.scss';

const Checkout: FunctionComponent = () => {
  const [cart, setCart] = useState<ProductInCartType[]>([]);
  const [isCashPay, setIsCashPay] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  useEffect(() => {
    setCart(getLocalStorageCart());
  }, []);

  function cashPayToggler() {
    setIsCashPay(prevIsCashPay => !prevIsCashPay);
  }

  function orderStateToggler() {
    setIsOrderComplete(true);
  }

  return (
    <>
      <div className={`lrPaddingContainer ${stylesHeader.headerWrapper}`}>
        <Header />
      </div>
      <main className={`lrPaddingContainer ${stylesCheckout.mainContainer}`}>
        {
          isOrderComplete && <CompletedOrder cart={cart} />
        }
        <GreyLink 
          href='/'
          text='Go Back'
        />
        <div className={stylesCheckout.gridContainer}>
          <CheckoutForm 
            cart={cart} 
            isCashPay={isCashPay} 
            cashPayToggler={cashPayToggler} 
            orderStateToggler={orderStateToggler}
          />
          <CheckoutSummary isCashPay={isCashPay} cart={cart} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
