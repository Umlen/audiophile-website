import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import typography from '@/styles/typography.module.scss';
import buttons from '@/styles/buttons.module.scss';
import checkout from '@/styles/checkout.module.scss';
import completedOrder from '@/styles/completedOrder.module.scss';

import CartProducts from '../CartProducts';
import ExpandButton from './ExpandButton';

import sumCalculations from '@/utils/sumCalculations';

function CompletedOrder(props) {
  const [isExpand, setIsExpand] = useState(false);

  const {grandTotal} = sumCalculations(props.cartItems);
  const productsElements =createProductsElements(props.cartItems);
  const numberOfProducts = props.cartItems.length;

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

  function expandToggler() {
    setIsExpand(prevState => !prevState);
  }

  function clearCart() {
    localStorage.clear();
  }

  return (
    <div className={completedOrder.wrapper}>
      <div className={`borderRadius ${completedOrder.completedOrder}`}>
        <Image src='/assets/icons/checkout/icon-order-confirmation.svg' width={64} height={64} alt='' />
        <h2 className={typography.mediumHeader}>thank you for your order</h2>
        <p className={typography.baseText}>You will receive an email confirmation shortly.</p>
        <div className={completedOrder.orderContainer}>
          <div className={`${completedOrder.orderInfoWrapper}`}>
            {productsElements}
            {
              numberOfProducts > 1 && 
              <ExpandButton 
                isExpand={isExpand} 
                numberOfProducts={numberOfProducts} 
                expandToggler={expandToggler} 
              />
            }
          </div>
          <div className={isExpand ? `${completedOrder.totalPriceWrapper} ${completedOrder.alignItemsEnd}` : completedOrder.totalPriceWrapper}>
            <div>
              <p className={`${typography.baseText} ${typography.uppercaseText} ${checkout.paddingBottom8px}`}>
                grand total
              </p>
              <p className={`${typography.bold18px}`}>$ {grandTotal}</p>
            </div>
          </div>
        </div>
        <Link 
          href='/' 
          className={`${buttons.baseButton} ${buttons.orangeButton} ${buttons.fullWidthBtn} ${typography.upperCaseBold13px}`}
        >
          <span onClick={clearCart()}>back to home</span>
        </Link>
      </div>
      <div className='blackout'></div>
    </div>
  );
}

export default CompletedOrder;