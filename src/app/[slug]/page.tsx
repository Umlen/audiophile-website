'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useImageDimension } from '@/hooks/hooks';
import { addCommaToPrice, productsSlugFilter } from '@/utils/utils';
import { addProductToCart } from '@/utils/utilsCart';
import productsData from '@/data/products';

import Header from '@/Components/Header';
import CategoriesMenu from '@/Components/menus/CategoriesMenu';
import OthersElements from '@/Components/productsPages/OthersElements';
import ProductGallery from '@/Components/productsPages/ProductGallery';
import IncludesElements from '@/Components/productsPages/IncludesElements';
import QuantityControlsBox from '@/Components/QuantityControlsBox';
import Footer from '@/Components/Footer';
import About from '@/Components/About';

import typography from '@/styles/typography.module.scss';
import stylesButtons from '@/styles/buttons.module.scss';
import stylesHeader from '@/styles/header-and-nav.module.scss';
import stylesProduct from '@/styles/product.module.scss';

type Props = {
  params: {
    slug: string;
  };
};

function Product({ params: {slug} }: Props) {
  const [quantity, setQuantity] = useState(1);
  const imageDimension = useImageDimension();
  const product = productsSlugFilter(slug, productsData);
  const productPrice = addCommaToPrice(product.price);

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  function increaseQuantity() {
    setQuantity(prev => prev + 1);
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  }

  function addToCart() {
    addProductToCart(product, quantity);
  }

  return (
    <>
      <div className={`lrPaddingContainer ${stylesHeader.headerWrapper}`}>
        <Header />
      </div>
      <main className={`lrPaddingContainer ${stylesProduct.paddingTopContainer}`}>
        <Link href={`/${product.category}`} className={`blackLink goBackLink ${typography.baseText}`}>
          Go Back
        </Link>
        <div className= {stylesProduct.gridContainer}>
          <section className={stylesProduct.previewSection}>
            <div
              className={`borderRadius ${stylesProduct.mainImage}`}
              style={{ backgroundImage: `url(${product.image[imageDimension]})` }}
            />
            <div className={stylesProduct.gapContainer}>
              {
                product.isNew &&
                  <p className={`${typography.widespaceText} ${typography.highlightText}`}>
                    new product
                  </p>
              }
              <h1 className={typography.bigHeader}>{product.name}</h1>
              <p className={typography.baseText}>{product.description}</p>
              <p className={`${typography.upperCaseBold13px} ${typography.smallestHeader}`}>
                $ {productPrice}
              </p>
              <div className={stylesProduct.addToCartContainer}>
                <QuantityControlsBox
                  id={product.id}
                  quantity={quantity}
                  minusBtnHandler={decreaseQuantity}
                  plusBtnHandler={increaseQuantity}
                  class={stylesProduct.quantityWrapper}
                />
                <button
                  className={`${stylesButtons.baseButton} ${stylesButtons.orangeButton} ${typography.upperCaseBold13px}`}
                  onClick={addToCart}
                >
                  add to cart
                </button>
              </div>
            </div>
          </section>
          <section className={`${stylesProduct.gapContainer} ${stylesProduct.featuresSection}`}>
            <h2 className={typography.mediumHeader}>features</h2>
            <p className={`${typography.baseText} ${typography.lineBreak}`}>
              {product.features}
            </p>
          </section>
          <IncludesElements includes={product.includes} />
          <ProductGallery gallery={product.gallery} imageDimension={imageDimension} />
          <OthersElements others={product.others} imageDimension={imageDimension} />
        </div>
      </main>
      <CategoriesMenu />
      <About />
      <Footer />
    </>
  );
}

export default Product;