import typography from '@/styles/typography.module.scss';
import buttons from '@/styles/buttons.module.scss';
import checkout from '@/styles/checkout.module.scss';

import CartProducts from '@/Components/CartProducts';

function CheckoutSummary(props) {
  const cartItems = props.cartItems;

  const productsElements = cartItems ? createProductsElements(cartItems) : undefined;
  const totalPrice = cartItems ? calculateTotalPrice(cartItems) : 0;
  const vatCost = Math.floor(totalPrice * 0.2);
  const shippingCost = Math.ceil(totalPrice * 0.01);
  const grandTotal = totalPrice + shippingCost;

  function calculateTotalPrice(cartArr) {
    return cartArr.reduce((total, { price, quantity }) => {
      const multiply = price * quantity;
      return total = total + multiply;
    }, 0);
  }

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
          <p className={typography.bold18px}>$ {totalPrice}</p>
        </div>
        <div className={`${checkout.flexContainer} ${checkout.paddingBottom8px}`}>
          <p className={`${typography.baseText} ${typography.uppercaseText}`}>shipping</p>
          <p className={typography.bold18px}>$ {shippingCost}</p>
        </div>
        <div className={`${checkout.flexContainer} ${checkout.paddingBottom8px}`}>
          <p className={`${typography.baseText} ${typography.uppercaseText}`}>vat(include)</p>
          <p className={typography.bold18px}>$ {vatCost}</p>
        </div>
      </div>
      <div className={checkout.flexContainer}>
        <p className={`${typography.baseText} ${typography.uppercaseText}`}>grand total</p>
        <p className={`${typography.bold18px} ${typography.highlightText}`}>$ {grandTotal}</p>
      </div>
      <button
        form='checkoutForm'
        className={`${buttons.baseButton} ${buttons.orangeButton} ${typography.upperCaseBold13px} ${buttons.fullWidthBtn}`}
      >
        {props.isCashPay ? 'continue' : 'continue & pay'}
      </button>
    </section>
  );
}

export default CheckoutSummary;