'use client';

import { useRouter } from 'next/navigation';
import { type FunctionComponent, useState } from 'react';
import { getLocalStorageCart } from '@/utils/utilsCart';
import { totalPriceCalculation } from '@/utils/utilsCalculations';
import {
  addCommaToPrice,
  decreaseQuantity,
  increaseQuantity,
} from '@/utils/utils';

import CartProduct from './CartProduct';
import OrangeButtonWide from '../ui/OrangeButtonWide';

import typography from '@/styles/typography.module.scss';
import stylesCart from '@/styles/cart.module.scss';

const Cart: FunctionComponent = () => {
  const [cartItems, setCartItems] = useState(getLocalStorageCart());
  const router = useRouter();
  const productsInCart = cartItems.length;
  const totalPrice =
    cartItems.length > 0
      ? addCommaToPrice(totalPriceCalculation(cartItems))
      : 0;

  function increaseQuantityHandler(id: string): void {
    const newCartItems = increaseQuantity(id, cartItems);
    setCartItems(newCartItems);
  }

  function decreaseQuantityHandler(id: string): void {
    const newCartItems = decreaseQuantity(id, cartItems);
    setCartItems(newCartItems);
  }

  function clearCart(): void {
    localStorage.clear();
    setCartItems([]);
  }

  function checkoutRedirect(): void {
    router.push('/checkout');
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
        {cartItems.map((cartItem) => (
          <CartProduct
            key={cartItem.id}
            product={cartItem}
            increaseQuantity={increaseQuantityHandler}
            decreaseQuantity={decreaseQuantityHandler}
          />
        ))}
        <div className={stylesCart.flexContainer}>
          <p className={`${typography.baseText} ${typography.uppercaseText}`}>
            Total
          </p>
          <p className={typography.bold18px}>$ {totalPrice}</p>
        </div>
        {productsInCart > 0 && (
          <OrangeButtonWide onClick={checkoutRedirect} text="checkout" />
        )}
      </div>
      <div className="blackout" />
    </>
  );
};

export default Cart;
