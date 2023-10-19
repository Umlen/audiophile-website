'use client';

import Link from 'next/link';
import { FunctionComponent, useState } from 'react';
import { totalPriceCalculation, addCommaToPrice, decreaseQuantity, getLocalStorageCart, increaseQuantity } from '@/utils/utils';
import CartProduct from './CartProduct';
import typography from '@/styles/typography.module.scss';
import stylesButtons from '@/styles/buttons.module.scss';
import stylesCart from '@/styles/cart.module.scss';

const Cart: FunctionComponent = () => {
  const [cartItems, setCartItems] = useState(getLocalStorageCart());
  const productsInCart = cartItems.length;
  const totalPrice = cartItems.length ? addCommaToPrice(totalPriceCalculation(cartItems)) : 0;
  
  function increaseQuantityHandler(id: string) {
    const newCartItems = increaseQuantity(id, cartItems);
    setCartItems(newCartItems);
  }

  function decreaseQuantityHandler(id: string) {
    const newCartItems = decreaseQuantity(id, cartItems);
    setCartItems(newCartItems);
  }

  function clearCart() {
    localStorage.clear();
    setCartItems([]);
  }

  return (
    <>
      <div className={`borderRadius ${stylesCart.cartContainer}`}>
        <div className={stylesCart.flexContainer}>
          <h2 className={typography.bold18px}>Cart ({productsInCart})</h2>
          <button
            onClick={clearCart}
            className={`${typography.baseText} ${stylesCart.removeBtn}`}
          >
            Remove all
          </button>
        </div>
        {
          cartItems.map(cartItem => (
              <CartProduct 
                key={cartItem.id}
                product={cartItem}
                increaseQuantity={increaseQuantityHandler}
                decreaseQuantity={decreaseQuantityHandler}
              />
            )
          )
        }
        <div className={stylesCart.flexContainer}>
          <p className={`${typography.baseText} ${typography.uppercaseText}`}>Total</p>
          <p className={typography.bold18px}>$ {totalPrice}</p>
        </div>
        {
          productsInCart > 0 &&
            <Link
              href='/checkout'
              className={`${stylesButtons.baseButton} ${stylesButtons.orangeButton} ${typography.upperCaseBold13px} ${stylesButtons.fullWidthBtn}`}
            >
              checkout
            </Link>
        }
      </div>
      <div className='blackout' />
    </>
  );
}

export default Cart;
