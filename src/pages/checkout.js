import Head from 'next/head';
import Link from 'next/link';;

import header from '@/styles/header-and-nav.module.scss';
import typography from '@/styles/typography.module.scss';
import buttons from '@/styles/buttons.module.scss';
import checkout from '@/styles/checkout.module.scss';

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

function Home() {
  return (
    <>
      <Head>
        <title>Audiophile - Checkout</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={`lrPaddingContainer ${header.headerWrapper}`}>
        <Header />
      </div>
      <div className='lrPaddingContainer goBackLink'>
        <Link href='/' className={`blackLink ${typography.baseText}`}>
          Go Back
        </Link>
      </div>
      <main className={`lrPaddingContainer ${checkout.mainContainer}`}>
        <h1 className={typography.mediumHeader}>checkout</h1>
      </main>
      <Footer />
    </>
  );
}

export default Home;