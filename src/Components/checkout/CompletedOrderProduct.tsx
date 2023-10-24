import { type FunctionComponent } from 'react';
import CartProduct from '../cart/CartProduct';
import { type ProductInCartType } from '@/types/types';

import typography from '@/styles/typography.module.scss';
import stylesCheckout from '@/styles/checkout.module.scss';

interface CompletedOrderProductProps {
  product: ProductInCartType;
}

const CompletedOrderProduct: FunctionComponent<CompletedOrderProductProps> = ({
  product,
}) => {
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
