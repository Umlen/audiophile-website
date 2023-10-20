'use client';

import Link from 'next/link';
import { FunctionComponent } from 'react';
import { useImageDimension } from '@/hooks/hooks';
import { ProductType } from '@/types/types';

import typography from '@/styles/typography.module.scss';
import stylesButtons from '@/styles/buttons.module.scss';
import stylesProduct from '@/styles/product-preview.module.scss';

type ProductsPreviewType = {
  product: ProductType;
};

const ProductsPreview: FunctionComponent<ProductsPreviewType> = ( {product} ) => {
  const imageDimension = useImageDimension();
  const {slug, name, categoryImage, isNew, description} = product;

  return (
    <section className={stylesProduct.product}>
      <div
        className={`borderRadius ${stylesProduct.image}`}
        style={{ backgroundImage: `url(${categoryImage[imageDimension]})` }}
      />
      <div className={stylesProduct.info}>
        {
          isNew &&
            <p className={`${typography.widespaceText} ${typography.highlightText}`}>
              new product
            </p>
        }
        <h2 className={typography.bigHeader}>{name}</h2>
        <p className={typography.baseText}>{description}</p>
        <Link
          href={`/${slug}`}
          className={`${stylesButtons.baseButton} ${stylesButtons.orangeButton} ${typography.upperCaseBold13px}`}
        >
          see product
        </Link>
      </div>
    </section>
  );
};

export default ProductsPreview;
