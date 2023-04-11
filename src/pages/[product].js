import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import productsData from '@/data/products';

import header from '@/styles/header-and-nav.module.scss';
import typography from '@/styles/typography.module.scss';
import buttons from '@/styles/buttons.module.scss';
import productStyle from '@/styles/product.module.scss';

import Header from '@/Components/Header';
import CategoriesMenu from '@/Components/CategoriesMenu';
import About from '@/Components/About';
import Footer from '@/Components/Footer';


export async function getStaticPaths() {
    const paths = productsData.map( productItem => ({params: {product: productItem.slug}}) );
    return {paths, fallback: false};
}

export async function getStaticProps({params}) {
    const product = productsData.find(productItem => productItem.slug === params.product);
    return {
        props: {product}
    };
}

function Product({product}) {
    const [imageDimension, setImageDimension] = useState('mobile');

    useEffect(() => {
        function choseImageDimension() {
            if(window.innerWidth > 1024) {
                setImageDimension('desktop');
            } else if(window.innerWidth > 699) {
                setImageDimension('tablet');
            } else {
                setImageDimension('mobile');
            }
        }
        choseImageDimension();
        window.addEventListener('resize', choseImageDimension);
        return(() => window.removeEventListener('resize', choseImageDimension));
    }, []);

    function createIncludesElements({includes}) {
        return includes.map((item, key) => {
            return (
                <p key={key}>
                    <span className={`${typography.baseText} ${typography.highlightText} ${productStyle.marginRight}`}>
                        {item.quantity}x
                    </span> 
                    <span className={typography.baseText}>
                        {item.item}
                    </span>
                </p>
            );
        });
    }

    function createGallery({gallery}) {
        const galleryImages = [];
        for (let key in gallery) {
            if (gallery.hasOwnProperty(key)) {
                galleryImages.push (
                    <div
                        key={key}
                        className={`borderRadius ${productStyle.galleryImage}`}
                        style={{backgroundImage: `url(${gallery[key][imageDimension]})`}}
                    >
                    </div>
                );
            }
        }
        return galleryImages;
    }

    function createOthersElements({others}) {
        return others.map((item, key)=> {
            return (
                <div key={key} className={productStyle.otherItemWrapper}>
                    <div
                        className={`borderRadius ${productStyle.othersImg}`}
                        style={{backgroundImage: `url(${item.image[imageDimension]})`}}
                    >
                    </div>
                    <h3 className={typography.smallHeader}>{item.name}</h3>
                    <Link 
                        href={`/${item.slug}`}
                        className={`${buttons.baseButton} ${buttons.orangeButton} ${typography.upperCaseBold13px}`}
                    >
                        see product
                    </Link>
                </div>
            );
        });
    }

    return (
        <>
            <Head>
                <title>Audiophile - {product.name}</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <div className={`lrPaddingContainer ${header.headerWrapper}`}>
                <Header />
            </div>
            <div className={`lrPaddingContainer ${productStyle.goBackLink}`}>
                <Link 
                    href={`/${product.category}`}
                    className={`blackLink ${typography.baseText}`}
                >
                    Go Back
                </Link>
            </div>
            <main className={`lrPaddingContainer ${productStyle.container}`}>
                <section className={productStyle.previewSection}>
                    <div 
                        className={`borderRadius ${productStyle.mainImage}`}
                        style={{backgroundImage: `url(${product.image[imageDimension]})`}}
                    >
                        {/*product image*/}
                    </div>
                    <div className={productStyle.gapContainer}>
                        {
                            product.new && 
                            <p className={`${typography.widespaceText} ${typography.highlightText}`}>
                                new product
                            </p>
                        }
                        <h1 className={typography.bigHeader}>{product.name}</h1>
                        <p className={typography.baseText}>{product.description}</p>
                        <p className={`${typography.upperCaseBold13px} ${typography.smallestHeader}`}>
                            $ {product.price}
                        </p>
                        <div>{/*add to cart*/}</div>
                    </div>
                </section>
                <section className={`${productStyle.gapContainer} ${productStyle.featuresSection}`}>
                    <h2 className={typography.mediumHeader}>features</h2>
                    <p className={`${typography.baseText} ${typography.lineBreak}`}>
                        {product.features}
                    </p>
                </section>
                <section className={`${productStyle.gapContainer} ${productStyle.includesSection}`}>
                    <h2 className={typography.mediumHeader}>in the box</h2>
                    <div>
                        {createIncludesElements(product)}
                    </div>
                </section>
                <div className={productStyle.gallery}>
                    {createGallery(product)}
                </div>
                <section className={`${productStyle.gapContainer} ${productStyle.othersSection}`}>
                    <h2 className={typography.mediumHeader}>you may also like</h2>
                    <div className={productStyle.othersContainer}>
                        {createOthersElements(product)}
                    </div>
                </section>
            </main>
            <CategoriesMenu />
            <About />
            <Footer />
        </>
    );
}

export default Product;