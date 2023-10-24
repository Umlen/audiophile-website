'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { type FunctionComponent, useState } from 'react';
import { createCheckoutSums } from '@/utils/utilsCalculations';
import { type ProductInCartType } from '@/types/types';

import ExpandButton from './ExpandButton';
import CompletedOrderProduct from './CompletedOrderProduct';
import OrangeButtonWide from '../ui/OrangeButtonWide';

import typography from '@/styles/typography.module.scss';
import stylesCheckout from '@/styles/checkout.module.scss';
import stylesCompletedOrder from '@/styles/completedOrder.module.scss';

interface CompletedOrderProps {
  cart: ProductInCartType[];
}

const CompletedOrder: FunctionComponent<CompletedOrderProps> = ({ cart }) => {
  const [isExpand, setIsExpand] = useState(false);
  const router = useRouter();
  const { grandTotal } = createCheckoutSums(cart);
  const numberOfProducts = cart.length;

  function expandToggler(): void {
    setIsExpand((prevState) => !prevState);
  }

  function backHomeButtonHandler(): void {
    localStorage.clear();
    router.push('/');
  }

  return (
    <div className={stylesCompletedOrder.wrapper}>
      <div className={`borderRadius ${stylesCompletedOrder.completedOrder}`}>
        <Image
          src="/assets/icons/checkout/icon-order-confirmation.svg"
          width={64}
          height={64}
          alt=""
        />
        <h2 className={typography.mediumHeader}>thank you for your order</h2>
        <p className={typography.baseText}>
          You will receive an email confirmation shortly.
        </p>
        <div className={stylesCompletedOrder.orderContainer}>
          <div className={`${stylesCompletedOrder.orderInfoWrapper}`}>
            {isExpand ? (
              cart.map((product) => (
                <CompletedOrderProduct key={product.id} product={product} />
              ))
            ) : (
              <CompletedOrderProduct product={cart[0]} />
            )}
            {numberOfProducts > 1 && (
              <ExpandButton
                isExpand={isExpand}
                numberOfProducts={numberOfProducts}
                expandToggler={expandToggler}
              />
            )}
          </div>
          <div
            className={
              isExpand
                ? `${stylesCompletedOrder.totalPriceWrapper} ${stylesCompletedOrder.alignItemsEnd}`
                : stylesCompletedOrder.totalPriceWrapper
            }
          >
            <div>
              <p
                className={`${typography.baseText} ${typography.uppercaseText} ${stylesCheckout.paddingBottom8px}`}
              >
                grand total
              </p>
              <p className={`${typography.bold18px}`}>$ {grandTotal}</p>
            </div>
          </div>
        </div>
        <OrangeButtonWide onClick={backHomeButtonHandler} text="back to home" />
      </div>
      <div className="blackout" />
    </div>
  );
};

export default CompletedOrder;
