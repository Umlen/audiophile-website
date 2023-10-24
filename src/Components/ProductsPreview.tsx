'use client';

import { type FunctionComponent } from 'react';
import { useImageDimension } from '@/hooks/hooks';
import { type ProductType } from '@/types/types';
import LinkAsButton from './ui/LinkAsButton';

import typography from '@/styles/typography.module.scss';
import stylesProduct from '@/styles/productPreview.module.scss';

interface ProductsPreviewProps {
  product: ProductType;
}

const ProductsPreview: FunctionComponent<ProductsPreviewProps> = ({
  product,
}) => {
  const imageDimension = useImageDimension();
  const { slug, name, categoryImage, isNew, description } = product;

  return (
    <section className={stylesProduct.product}>
      <div
        className={`borderRadius ${stylesProduct.image}`}
        style={{ backgroundImage: `url(${categoryImage[imageDimension]})` }}
      />
      <div className={stylesProduct.info}>
        {isNew && (
          <p
            className={`${typography.widespaceText} ${typography.highlightText}`}
          >
            new product
          </p>
        )}
        <h2 className={typography.bigHeader}>{name}</h2>
        <p className={typography.baseText}>{description}</p>
        <LinkAsButton
          href={`/${slug}`}
          text="see product"
          linkStyle="orangeButton"
        />
      </div>
    </section>
  );
};

export default ProductsPreview;
