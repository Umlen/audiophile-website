import typography from '@/styles/typography.module.scss';
import buttons from '@/styles/buttons.module.scss';
import checkout from '@/styles/checkout.module.scss';


import { addCommaToPrice, sumCalculation } from '@/utils/utils';
import CartProduct from '../CartProduct';

function CheckoutSummary(props) {
  const cartItems = props.cartItems;

  const productsElements = cartItems && createProductsElements(cartItems);
  const {totalPrice, vatCost, shippingCost, grandTotal} = cartItems ? sumCalculation(cartItems) :  0;
  const totalPriceStr = addCommaToPrice(totalPrice);
  const vatCostStr = addCommaToPrice(vatCost);
  const shippingCostStr = addCommaToPrice(shippingCost);
  const grandTotalStr = addCommaToPrice(grandTotal);

  function createProductsElements(cartArr) {
    return cartArr.map((product, key) => {
      return (
        <div key={key} className={checkout.flexContainer}>
          <CartProduct product={product} />
          <p className={`${typography.baseText} ${typography.boldText}`}>x{product.quantity}</p>
        </div>
      );
    });
  }

  return (
    <section className={`borderRadius ${checkout.whiteSection} ${checkout.summarySection}`}>
      <h2 className={`${typography.bold18px} ${checkout.paddingBottom8px}`}>summary</h2>
      {productsElements}
      <div>
        <div className={`${checkout.flexContainer} ${checkout.paddingBottom8px}`}>
          <p className={`${typography.baseText} ${typography.uppercaseText}`}>Total</p>
          <p className={typography.bold18px}>$ {totalPriceStr || 0}</p>
        </div>
        <div className={`${checkout.flexContainer} ${checkout.paddingBottom8px}`}>
          <p className={`${typography.baseText} ${typography.uppercaseText}`}>shipping</p>
          <p className={typography.bold18px}>$ {shippingCostStr || 0}</p>
        </div>
        <div className={`${checkout.flexContainer} ${checkout.paddingBottom8px}`}>
          <p className={`${typography.baseText} ${typography.uppercaseText}`}>vat(include)</p>
          <p className={typography.bold18px}>$ {vatCostStr || 0}</p>
        </div>
      </div>
      <div className={checkout.flexContainer}>
        <p className={`${typography.baseText} ${typography.uppercaseText}`}>grand total</p>
        <p className={`${typography.bold18px} ${typography.highlightText}`}>$ {grandTotalStr || 0}</p>
      </div>
      <button
        form='checkoutForm'
        type='submit'
        className={`${buttons.baseButton} ${buttons.orangeButton} ${typography.upperCaseBold13px} ${buttons.fullWidthBtn}`}
      >
        {props.isCashPay ? 'continue' : 'continue & pay'}
      </button>
    </section>
  );
}

export default CheckoutSummary;