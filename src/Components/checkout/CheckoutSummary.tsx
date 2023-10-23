import { FunctionComponent } from 'react';
import { ProductInCartType } from '@/types/types';
import { createCheckoutSums } from '@/utils/utilsCalculations';
import CheckoutProducts from './CheckoutProducts';
import OrangeButtonWide from '../ui/OrangeButtonWide';

import typography from '@/styles/typography.module.scss';
import stylesCheckout from '@/styles/checkout.module.scss';


type CheckoutSummaryProps = {
  cart: ProductInCartType[];
  isCashPay: boolean;
};

const CheckoutSummary: FunctionComponent<CheckoutSummaryProps> = ( {cart, isCashPay} ) => {
  const {total, vat, shipping, grandTotal} = createCheckoutSums(cart);

  return (
    <section className={`borderRadius ${stylesCheckout.whiteSection} ${stylesCheckout.summarySection}`}>
      <h2 className={`${typography.bold18px} ${stylesCheckout.paddingBottom8px}`}>summary</h2>
      {
        cart.map(product => (
          <CheckoutProducts 
            key={product.id}
            product={product}
          />
        ))
      }
      <div>
        <div className={`${stylesCheckout.flexContainer} ${stylesCheckout.paddingBottom8px}`}>
          <p className={`${typography.baseText} ${typography.uppercaseText}`}>Total</p>
          <p className={typography.bold18px}>$ {total}</p>
        </div>
        <div className={`${stylesCheckout.flexContainer} ${stylesCheckout.paddingBottom8px}`}>
          <p className={`${typography.baseText} ${typography.uppercaseText}`}>shipping</p>
          <p className={typography.bold18px}>$ {shipping}</p>
        </div>
        <div className={`${stylesCheckout.flexContainer} ${stylesCheckout.paddingBottom8px}`}>
          <p className={`${typography.baseText} ${typography.uppercaseText}`}>vat(include)</p>
          <p className={typography.bold18px}>$ {vat}</p>
        </div>
      </div>
      <div className={stylesCheckout.flexContainer}>
        <p className={`${typography.baseText} ${typography.uppercaseText}`}>grand total</p>
        <p className={`${typography.bold18px} ${typography.highlightText}`}>$ {grandTotal}</p>
      </div>
      <OrangeButtonWide 
        form='checkoutForm'
        type='submit'
        text={isCashPay ? 'continue' : 'continue & pay'}
      />
    </section>
  );
};

export default CheckoutSummary;
