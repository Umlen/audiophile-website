import Image from 'next/image';

import typography from '@/styles/typography.module.scss';
import cartStyles from '@/styles/cart.module.scss';

function CartProducts({ product }) {
  return (
    <>
      <Image className='borderRadius' src={product.image} alt={product.name} width={64} height={64} />
      <div className={cartStyles.productInfoWrapper}>
        <p className={`${typography.baseText} ${typography.noOpacityText} ${typography.boldText}`}>{product.name}</p>
        <p className={`${typography.baseText} ${typography.boldText}`}>$ {product.price}</p>
      </div>
    </>
  );
}

export default CartProducts;