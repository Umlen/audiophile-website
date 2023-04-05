import Head from 'next/head';

import products from '../products';

import header from '@/styles/header-and-nav.module.scss';
import typography from '@/styles/typography.module.scss';

import Header from '@/Components/Header';
import Product from '@/Components/Product';
import CategoriesMenu from '@/Components/CategoriesMenu';
import About from '@/Components/About';
import Footer from '@/Components/Footer';

function Headphones() {
    function productsCategoryFilter() {
        return products.filter(({category}) => category === 'headphones');
    }

    return (
        <>
            <Head>
                <title>Audiophile - Headphones</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <div className={`lrPaddingContainer ${header.headerWrapper}`}>
                <Header />
                <h1 className={`${header.pageTitle} ${typography.bigHeader}`}>headphones</h1>
            </div>
            <main className='lrPaddingContainer'>
                <Product products={productsCategoryFilter()} />
            </main>
            <CategoriesMenu />
            <About />
            <Footer />
        </>
    );
}

export default Headphones;