'use client';

import { type FunctionComponent, useState, useEffect } from 'react';
import { getLocalStorageCart } from '@/utils/utilsCart';
import { type ProductInCartType } from '@/types/types';

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import CheckoutSummary from '@/Components/checkout/CheckoutSummary';
import CheckoutForm from '@/Components/checkout/CheckoutForm';
import CompletedOrder from '@/Components/checkout/CompletedOrder';
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

  function cashPayToggler(): void {
    setIsCashPay((prevIsCashPay) => !prevIsCashPay);
  }

  function orderStateToggler(): void {
    setIsOrderComplete(true);
  }

  return (
    <>
      <div className={`lrPaddingContainer ${stylesHeader.headerWrapper}`}>
        <Header />
      </div>
      <main className={`lrPaddingContainer ${stylesCheckout.mainContainer}`}>
        {isOrderComplete && <CompletedOrder cart={cart} />}
        <GreyLink href="/" text="Go Back" />
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
