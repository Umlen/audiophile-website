'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import typography from '@/styles/typography.module.scss';
import buttons from '@/styles/buttons.module.scss';
import productStyles from '@/styles/product-preview.module.scss';

function ProductPreview(props) {
  const [imageDimension, setImageDimension] = useState('mobile');
  const products = props.products;

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

  function placeNewProductsFirst(productsArray) {
    return productsArray.sort((a, b) => b.new - a.new);
  }

  function createProductsEl() {
    const sortedProducts = placeNewProductsFirst(products);
    return sortedProducts.map(product => {
      return (
        <section className={productStyles.product} key={product.id}>
          <div
            className={`borderRadius ${productStyles.image}`}
            style={{ backgroundImage: `url(${product.categoryImage[imageDimension]})` }}
          >
          </div>
          <div className={productStyles.info}>
            {
              product.new &&
              <p className={`${typography.widespaceText} ${typography.highlightText}`}>
                new product
              </p>
            }
            <h2 className={typography.bigHeader}>{product.name}</h2>
            <p className={typography.baseText}>{product.description}</p>
            <Link
              href={`/${product.slug}`}
              className={`${buttons.baseButton} ${buttons.orangeButton} ${typography.upperCaseBold13px}`}
            >
              see product
            </Link>
          </div>
        </section>
      );
    });
  }

  return createProductsEl();
}

export default ProductPreview;
