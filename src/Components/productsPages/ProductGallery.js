import productStyle from '@/styles/product.module.scss';

function ProductGallery(props) {
  const gallery = props.gallery;
  const galleryImages = [];

  for (let key in gallery) {
    if (gallery.hasOwnProperty(key)) {
      galleryImages.push(
        <div
          key={key}
          className={`borderRadius ${productStyle.galleryImage}`}
          style={{ backgroundImage: `url(${gallery[key][props.imageDimension]})` }}
        >
        </div>
      );
    }
  }
  return (
    <div className={productStyle.gallery}>
      {galleryImages}
    </div>
  );
}

export default ProductGallery;