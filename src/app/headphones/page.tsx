import { Metadata } from 'next';
import { FunctionComponent } from 'react';
import { placeNewProductsFirst, productsCategoryFilter } from '@/utils/utils';
import productsData from '@/data/products';

import Header from '@/Components/Header';
import CategoriesMenu from '@/Components/menus/CategoriesMenu';
import Footer from '@/Components/Footer';
import About from '@/Components/About';
import ProductsPreview from '@/Components/ProductsPreview';

import typography from '@/styles/typography.module.scss';
import stylesHeader from '@/styles/header.module.scss';

export const metadata: Metadata = {
  title: 'Audiophile - Headphones',
};

const Headphones: FunctionComponent = () => {
  const products = productsCategoryFilter('headphones', productsData);
  const sortedProducts = placeNewProductsFirst(products);

  return (
    <>
      <div className={`lrPaddingContainer ${stylesHeader.headerWrapper}`}>
        <Header />
      </div>
      <main className='lrPaddingContainer'>
        <h1 className={`categoriesPageTitle ${typography.bigHeader}`}>headphones</h1>
        {
          sortedProducts.map(product => (
            <ProductsPreview 
              key={product.id}
              product={product}
            />
          ))
        }
      </main>
      <CategoriesMenu />
      <About />
      <Footer />
    </>
  );
};

export default Headphones;
