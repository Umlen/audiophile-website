import typography from '@/styles/typography.module.scss';
import buttons from '@/styles/buttons.module.scss';
import checkout from '@/styles/checkout.module.scss';

import CartProducts from '@/Components/CartProducts';

import sumCalculations from '@/utils/sumCalculations';

function CheckoutSummary(props) {
  const cartItems = props.cartItems;

  const productsElements = cartItems && createProductsElements(cartItems);
  const {totalPrice, vatCost, shippingCost, grandTotal} = cartItems ? sumCalculations(cartItems) : 0;

  function createProductsElements(cartArr) {
    return cartArr.map((product, key) => {
      return (
        <div key={key} className={checkout.flexContainer}>
          <CartProducts product={product} />
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
          <p className={typography.bold18px}>$ {totalPrice || 0}</p>
        </div>
        <div className={`${checkout.flexContainer} ${checkout.paddingBottom8px}`}>
          <p className={`${typography.baseText} ${typography.uppercaseText}`}>shipping</p>
          <p className={typography.bold18px}>$ {shippingCost || 0}</p>
        </div>
        <div className={`${checkout.flexContainer} ${checkout.paddingBottom8px}`}>
          <p className={`${typography.baseText} ${typography.uppercaseText}`}>vat(include)</p>
          <p className={typography.bold18px}>$ {vatCost || 0}</p>
        </div>
      </div>
      <div className={checkout.flexContainer}>
        <p className={`${typography.baseText} ${typography.uppercaseText}`}>grand total</p>
        <p className={`${typography.bold18px} ${typography.highlightText}`}>$ {grandTotal || 0}</p>
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