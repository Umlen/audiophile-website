import { type FunctionComponent } from 'react';
import { type ImageType } from '@/types/types';
import stylesProduct from '@/styles/product.module.scss';

interface ProductGalleryProps {
  gallery: ImageType[];
  imageDimension: string;
}

const ProductGallery: FunctionComponent<ProductGalleryProps> = ({
  gallery,
  imageDimension,
}) => {
  return (
    <div className={stylesProduct.gallery}>
      {gallery.map((item, key) => (
        <div
          key={key}
          className={`borderRadius ${stylesProduct.galleryImage}`}
          style={{ backgroundImage: `url(${item[imageDimension]})` }}
        />
      ))}
    </div>
  );
};

export default ProductGallery;
