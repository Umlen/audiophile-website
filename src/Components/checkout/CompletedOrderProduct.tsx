import { FunctionComponent } from 'react';
import { ProductInCartType } from '@/types/types';
import CartProduct from '../cart/CartProduct';

import typography from '@/styles/typography.module.scss';
import stylesCheckout from '@/styles/checkout.module.scss';

type CompletedOrderProductProps = {
  product: ProductInCartType;
};

const CompletedOrderProduct: FunctionComponent<CompletedOrderProductProps> = ( {product} ) => {
  return (
    <div className={stylesCheckout.flexContainer}>
      <CartProduct product={product} />
      <p className={`${typography.baseText} ${typography.boldText}`}>
        x{product.quantity}
      </p>
    </div>
  );
};

export default CompletedOrderProduct;
