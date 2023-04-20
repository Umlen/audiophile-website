import Head from 'next/head';

import productsData from '@/data/products';

import header from '@/styles/header-and-nav.module.scss';
import typography from '@/styles/typography.module.scss';

import Header from '@/Components/Header';
import Product from '@/Components/ProductPreview';
import CategoriesMenu from '@/Components/menus/CategoriesMenu';
import About from '@/Components/About';
import Footer from '@/Components/Footer';

function Headphones() {
  function productsCategoryFilter() {
    return productsData.filter(({ category }) => category === 'headphones');
  }

  return (
    <>
      <Head>
        <title>Audiophile - Headphones</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={`lrPaddingContainer ${header.headerWrapper}`}>
        <Header />
      </div>
      <main className='lrPaddingContainer'>
        <h1 className={`categoriesPageTitle ${typography.bigHeader}`}>headphones</h1>
        <Product products={productsCategoryFilter()} />
      </main>
      <CategoriesMenu />
      <About />
      <Footer />
    </>
  );
}

export default Headphones;