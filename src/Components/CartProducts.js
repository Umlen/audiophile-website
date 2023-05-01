import Image from 'next/image';

import typography from '@/styles/typography.module.scss';
import cartStyles from '@/styles/cart.module.scss';

import addCommaToPrice from '@/utils/addCommaToPrice';

function CartProducts({ product }) {
  const productPriceStr = addCommaToPrice(product.price);

  return (
    <>
      <Image className='borderRadius' src={product.image} alt={product.name} width={64} height={64} />
      <div className={cartStyles.productInfoWrapper}>
        <p className={`${typography.baseText} ${typography.noOpacityText} ${typography.boldText}`}>{product.name}</p>
        <p className={`${typography.baseText} ${typography.boldText}`}>$ {productPriceStr}</p>
      </div>
    </>
  );
}

export default CartProducts;