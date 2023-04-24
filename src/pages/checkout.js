import { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import header from '@/styles/header-and-nav.module.scss';
import typography from '@/styles/typography.module.scss';
import checkout from '@/styles/checkout.module.scss';

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import CheckoutSummary from '@/Components/checkout/CheckoutSummary';


function Home() {
  const [isCashPay, setIsCashPay] = useState(true);
  const [cartItems, setCartItems] = useState(undefined);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('cart')));
  }, []);

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
          <CheckoutSummary isCashPay={isCashPay} cartItems={cartItems} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;