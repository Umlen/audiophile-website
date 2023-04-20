import { useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import header from '@/styles/header-and-nav.module.scss';
import typography from '@/styles/typography.module.scss';
import buttons from '@/styles/buttons.module.scss';
import checkout from '@/styles/checkout.module.scss';

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import CartProducts from '@/Components/CartProducts';

function Home() {
  const [isCashPay, setIsCashPay] = useState(false);
  
  const cartItems = JSON.parse(localStorage.getItem('cart'));
  const productsElements = createProductsElements(cartItems);
  const totalPrice = calculateTotalPrice(cartItems);
  const vatCost = Math.floor(totalPrice * 0.2);
  const shippingCost = Math.ceil(totalPrice * 0.01);
  const grandTotal = totalPrice + shippingCost;


  function calculateTotalPrice(cartArr) {
    return cartArr.reduce((total, { price, quantity }) => {
      const multiply = price * quantity;
      return total = total + multiply;
    }, 0);
  }

  function createProductsElements(cartArr) {
    return cartArr.map((product, key) => {
      return (
        <div key={key} className={checkout.flexContainer}>
          <CartProducts product={product} />
          <p className={`${typography.baseText} ${typography.boldText}`}>x{product.quantity}</p>
        </div>
      );
    });
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
        <Link href='/' className={`blackLink goBackLink ${typography.baseText}`}>
          Go Back
        </Link>
        <div className={checkout.gridContainer}>
          <section className={`borderRadius ${checkout.whiteSection}`}>
            <h1 className={`${typography.mediumHeader} ${typography.boldText}`}>checkout</h1>
            <div>
              <h4 className={`${typography.upperCaseBold13px} ${typography.highlightText}`}>
                billing details
              </h4>
            </div>
            <div>
              <h4 className={`${typography.upperCaseBold13px} ${typography.highlightText}`}>
                shipping info
              </h4>
            </div>
            <div>
              <h4 className={`${typography.upperCaseBold13px} ${typography.highlightText}`}>
                payment details
              </h4>
            </div>
          </section>
          <section className={`borderRadius ${checkout.whiteSection} ${checkout.summarySection}`}>
            <h2 className={`${typography.bold18px} ${checkout.paddingBottom8px}`}>summary</h2>
            {productsElements}
            <div>
              <div className={`${checkout.flexContainer} ${checkout.paddingBottom8px}`}>
                <p className={`${typography.baseText} ${typography.uppercaseText}`}>Total</p>
                <p className={typography.bold18px}>$ {totalPrice}</p>
              </div>
              <div className={`${checkout.flexContainer} ${checkout.paddingBottom8px}`}>
                <p className={`${typography.baseText} ${typography.uppercaseText}`}>shipping</p>
                <p className={typography.bold18px}>$ {shippingCost}</p>
              </div>
              <div className={`${checkout.flexContainer} ${checkout.paddingBottom8px}`}>
                <p className={`${typography.baseText} ${typography.uppercaseText}`}>vat(include)</p>
                <p className={typography.bold18px}>$ {vatCost}</p>
              </div>
            </div>
            <div className={checkout.flexContainer}>
              <p className={`${typography.baseText} ${typography.uppercaseText}`}>grand total</p>
              <p className={`${typography.bold18px} ${typography.highlightText}`}>$ {grandTotal}</p>
            </div>
            <button
              className={`${buttons.baseButton} ${buttons.orangeButton} ${typography.upperCaseBold13px} ${buttons.fullWidthBtn}`}
            >
              {isCashPay ? 'continue' : 'continue & pay'}
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;