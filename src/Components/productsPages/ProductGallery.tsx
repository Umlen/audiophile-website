import { FunctionComponent } from 'react';
import { ImageType } from '@/types/types';
import stylesProduct from '@/styles/product.module.scss';

type ProductGalleryType = {
  gallery: ImageType[];
  imageDimension: string;
};

const ProductGallery: FunctionComponent<ProductGalleryType> = ( {gallery, imageDimension} ) => {
  return (
    <div className={stylesProduct.gallery}>
      {
        gallery.map((item, key) => (
          <div
            key={key}
            className={`borderRadius ${stylesProduct.galleryImage}`}
            style={{ backgroundImage: `url(${item[imageDimension]})` }}
          />
        ))
      }
    </div>
  );
};

export default ProductGallery;
