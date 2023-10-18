import { Metadata } from 'next';

import productsData from '@/data/products';

import header from '@/styles/header-and-nav.module.scss';
import typography from '@/styles/typography.module.scss';

import Header from '@/Components/Header';
import Product from '@/Components/ProductPreview';
import CategoriesMenu from '@/Components/menus/CategoriesMenu';
import Footer from '@/Components/Footer';
import About from '@/Components/About';

export const metadata: Metadata = {
  title: 'Audiophile - Speakers',
};

function Speakers() {
  function productsCategoryFilter() {
    return productsData.filter(({ category }) => category === 'speakers');
  }

  return (
    <>
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