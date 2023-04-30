import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import typography from '@/styles/typography.module.scss';
import buttons from '@/styles/buttons.module.scss';
import checkout from '@/styles/checkout.module.scss';

import CartProducts from './CartProducts';

function CompletedOrder(props) {
  const [isExpand, setIsExpand] = useState(false);

  const totalPrice = calculateTotalPrice(props.cartItems);
  const productsElements =createProductsElements(props.cartItems);
  const numberOfProducts = props.cartItems.length;
  const expandButton = createExpandButton();

  function calculateTotalPrice(cartArr) {
    return cartArr.reduce((total, { price, quantity }) => {
      const multiply = price * quantity;
      return total = total + multiply;
    }, 0);
  }

  function createProductsElements(cartArr) {
    if (isExpand) {
      return cartArr.map((product, key) => {
        return (
          <div key={key} className={checkout.flexContainer}>
            <CartProducts product={product} />
            <p className={`${typography.baseText} ${typography.boldText}`}>x{product.quantity}</p>
          </div>
        );
      });
    } else {
      return (
        <div className={checkout.flexContainer}>
          <CartProducts product={cartArr[0]} />
          <p className={`${typography.baseText} ${typography.boldText}`}>x{cartArr[0].quantity}</p>
        </div>
      );
    }
  }

  function createExpandButton() {
      if (isExpand) {
        return (
          <p className={`${typography.baseText} ${checkout.expandButton}`} onClick={expandToggler}>
            View less
          </p> 
        );
      } else if (!isExpand) {
        return (
          <p className={`${typography.baseText} ${checkout.expandButton}`} onClick={expandToggler}>
            and {numberOfProducts - 1} other item(s)
          </p> 
        );
      }
  }

  function expandToggler() {
    setIsExpand(prevState => !prevState);
  }

  return (
    <div className={checkout.completedOrderWrapper}>
      <div className={`borderRadius ${checkout.completedOrder}`}>
        <Image src='/assets/icons/checkout/icon-order-confirmation.svg' width={64} height={64} alt='' />
        <h2 className={typography.mediumHeader}>thank you for your order</h2>
        <p className={typography.baseText}>You will receive an email confirmation shortly.</p>
        <div className={checkout.orderContainer}>
          <div className={`${checkout.orderInfoWrapper}`}>
            {productsElements}
            {numberOfProducts > 1 && expandButton}
          </div>
          <div className={isExpand ? `${checkout.totalPriceWrapper} ${checkout.alignItemsEnd}` : checkout.totalPriceWrapper}>
            <div>
              <p className={`${typography.baseText} ${typography.uppercaseText} ${checkout.paddingBottom8px}`}>
                grand total
              </p>
              <p className={`${typography.bold18px}`}>$ {totalPrice}</p>
            </div>
          </div>
        </div>
        <Link 
          href='/' 
          className={`${buttons.baseButton} ${buttons.orangeButton} ${buttons.fullWidthBtn} ${typography.upperCaseBold13px}`}
        >
          back to home
        </Link>
      </div>
      <div className='blackout'></div>
    </div>
  );
}

export default CompletedOrder;