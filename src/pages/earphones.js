import Head from 'next/head';

import productsData from '@/data/products';

import header from '@/styles/header-and-nav.module.scss';
import typography from '@/styles/typography.module.scss';

import Header from '@/Components/Header';
import ProductPreview from '@/Components/ProductPreview';
import CategoriesMenu from '@/Components/menus/CategoriesMenu';
import About from '@/Components/About';
import Footer from '@/Components/Footer';

function Earphones() {
  function productsCategoryFilter() {
    return productsData.filter(({ category }) => category === 'earphones');
  }

  return (
    <>
      <Head>
        <title>Audiophile - Earphones</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={`lrPaddingContainer ${header.headerWrapper}`}>
        <Header />
      </div>
      <main className='lrPaddingContainer'>
        <h1 className={`categoriesPageTitle ${typography.bigHeader}`}>earphones</h1>
        <ProductPreview products={productsCategoryFilter()} />
      </main>
      <CategoriesMenu />
      <About />
      <Footer />
    </>
  );
}

export default Earphones;