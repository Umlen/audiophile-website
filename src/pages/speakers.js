import Head from 'next/head';

import productsData from '@/data/products';

import header from '@/styles/header-and-nav.module.scss';
import typography from '@/styles/typography.module.scss';

import Header from '@/Components/Header';
import Product from '@/Components/ProductPreview';
import CategoriesMenu from '@/Components/menus/CategoriesMenu';
import About from '@/Components/About';
import Footer from '@/Components/Footer';

function Speakers() {
  function productsCategoryFilter() {
    return productsData.filter(({ category }) => category === 'speakers');
  }

  return (
    <>
      <Head>
        <title>Audiophile - Speakers</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={`lrPaddingContainer ${header.headerWrapper}`}>
        <Header />
      </div>
      <main className='lrPaddingContainer'>
        <h1 className={`categoriesPageTitle ${typography.bigHeader}`}>speakers</h1>
        <Product products={productsCategoryFilter()} />
      </main>
      <CategoriesMenu />
      <About />
      <Footer />
    </>
  );
}

export default Speakers;