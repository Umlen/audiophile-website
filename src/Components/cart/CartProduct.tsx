import Image from 'next/image';
import { type FunctionComponent } from 'react';
import { type ProductInCartType } from '@/types/types';
import { addCommaToPrice } from '@/utils/utils';
import QuantityControlsBox from '../ui/QuantityControlsBox';
import typography from '@/styles/typography.module.scss';
import stylesCart from '@/styles/cart.module.scss';

interface CartProductProps {
  product: ProductInCartType;
  decreaseQuantity?: (id: string) => void;
  increaseQuantity?: (id: string) => void;
}

const CartProduct: FunctionComponent<CartProductProps> = ({
  product,
  decreaseQuantity,
  increaseQuantity,
}) => {
  const { id, name, price, quantity, image } = product;
  const productPrice = addCommaToPrice(price);

  return (
    <div className={stylesCart.flexContainer}>
      <>
        <Image
          className="borderRadius"
          src={image}
          alt={name}
          width={64}
          height={64}
        />
        <div className={stylesCart.productInfoWrapper}>
          <p
            className={`${typography.baseText} ${typography.noOpacityText} ${typography.boldText}`}
          >
            {name}
          </p>
          <p className={`${typography.baseText} ${typography.boldText}`}>
            $ {productPrice}
          </p>
        </div>
      </>
      {decreaseQuantity && increaseQuantity && (
        <QuantityControlsBox
          class={stylesCart.quantityWrapper}
          id={id}
          quantity={quantity}
          minusBtnHandler={() => {
            decreaseQuantity(id);
          }}
          plusBtnHandler={() => {
            increaseQuantity(id);
          }}
        />
      )}
    </div>
  );
};

export default CartProduct;
