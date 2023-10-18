'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import productsData from '@/data/products';

import header from '@/styles/header-and-nav.module.scss';
import typography from '@/styles/typography.module.scss';
import buttons from '@/styles/buttons.module.scss';
import productStyle from '@/styles/product.module.scss';

import Header from '@/Components/Header';
import CategoriesMenu from '@/Components/menus/CategoriesMenu';
import IncludesElements from '@/Components/productsPages/IncludesElements';
import OthersElements from '@/Components/productsPages/OthersElements';
import ProductGallery from '@/Components/productsPages/ProductGallery';
import QuantityControlsBox from '@/Components/QuantityControlsBox';
import Footer from '@/Components/Footer';
import About from '@/Components/About';

import addCommaToPrice from '@/utils/addCommaToPrice';
import { ProductObjType, ProductType } from '@/types/types';

type Props = {
  params: {
    slug: string;
  }
};

function Product({ params: {slug} }: Props) {
  const [imageDimension, setImageDimension] = useState('mobile');
  const [quantity, setQuantity] = useState(1);

  const product = productsData.filter((productItem : ProductType) => productItem.slug === slug)[0];
  const productPriceStr = addCommaToPrice(product.price);

  useEffect(() => {
    function choseImageDimension() {
      if (window.innerWidth > 1024) {
        setImageDimension('desktop');
      } else if (window.innerWidth > 699) {
        setImageDimension('tablet');
      } else {
        setImageDimension('mobile');
      }
    }
    choseImageDimension();
    window.addEventListener('resize', choseImageDimension);
    return (() => window.removeEventListener('resize', choseImageDimension));
  }, []);

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
    if (localStorage.length !== 0) {
      const localStorageCart = localStorage.getItem('cart');
      const cart: ProductObjType[] = [];
      if (localStorageCart !== null) {
        cart.push(...JSON.parse(localStorageCart));
      }

      if (searchDuplicate(cart)) {
        for (let i = 0; i < cart.length; i++) {
          if (cart[i].id === product.id) {
            cart[i] = {
              ...cart[i],
              quantity: cart[i].quantity + quantity
            };
            break;
          }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        const productObj = {
          id: product.id,
          name: product.cart.cartName,
          price: product.price,
          quantity: quantity,
          image: product.cart.cartImage
        };

        cart.push(productObj);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    } else {
      const productObj = {
        id: product.id,
        name: product.cart.cartName,
        price: product.price,
        quantity: quantity,
        image: product.cart.cartImage
      };
      const cart: ProductObjType[] = [];

      cart.push(productObj);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  function searchDuplicate(cartArr) {
    let isDuplicateFound = false;

    for (let i = 0; i < cartArr.length; i++) {
      if (cartArr[i].id === product.id) {
        isDuplicateFound = !isDuplicateFound;
        break;
      }
    }

    return isDuplicateFound;
  }

  return (
    <>
      <div className={`lrPaddingContainer ${header.headerWrapper}`}>
        <Header />
      </div>
      <main className={`lrPaddingContainer ${productStyle.paddingTopContainer}`}>
        <Link href={`/${product.category}`} className={`blackLink goBackLink ${typography.baseText}`}>
          Go Back
        </Link>
        <div className= {productStyle.gridContainer}>
          <section className={productStyle.previewSection}>
            <div
              className={`borderRadius ${productStyle.mainImage}`}
              style={{ backgroundImage: `url(${product.image[imageDimension]})` }}
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
                $ {productPriceStr}
              </p>
              <div className={productStyle.addToCartContainer}>
                <QuantityControlsBox
                  id={product.id}
                  quantity={quantity}
                  minusBtnHandler={decreaseQuantity}
                  plusBtnHandler={increaseQuantity}
                  class={productStyle.quantityWrapper}
                />
                <button
                  className={`${buttons.baseButton} ${buttons.orangeButton} ${typography.upperCaseBold13px}`}
                  onClick={addToCart}
                >
                  add to cart
                </button>
              </div>
            </div>
          </section>
          <section className={`${productStyle.gapContainer} ${productStyle.featuresSection}`}>
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