import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import typography from '@/styles/typography.module.scss';
import buttons from '@/styles/buttons.module.scss';
import cartStyles from '@/styles/cart.module.scss';

import QuantityControlsBox from './QuantityControlsBox';

function Cart() {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')));

    const productsInCart = cartItems ? cartItems.length : 0;
    const totalPrice = cartItems ? calculateTotalPrice(cartItems) : 0;
    const productsElements = cartItems ? createProductsElements(cartItems) : undefined;

    function calculateTotalPrice(cartArr) {
        return cartArr.reduce((total, {price, quantity}) => {
            const multiply = price * quantity;
            return total = total + multiply;
        }, 0);
    }

    function increaseQuantity(e) {
        const newCartItems = cartItems.map(item => {
            const currentId = Number(e.currentTarget.parentNode.id);
            if (currentId === item.id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item;
        });

        localStorage.setItem('cart', JSON.stringify(newCartItems));
        setCartItems(newCartItems);
    }

    function decreaseQuantity(e) {
        const newCartItems = cartItems.map(item => {
            const currentId = Number(e.currentTarget.parentNode.id);
            if (currentId === item.id) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item;
        });

        localStorage.setItem('cart', JSON.stringify(newCartItems));
        setCartItems(newCartItems);
    }

    function clearCart() {
        localStorage.clear();
        setCartItems(JSON.parse(localStorage.getItem('cart')));
    }

    function createProductsElements(cartArr) {
        return cartArr.map((product, key) => {
            return (
                <div key={key} className={cartStyles.flexContainer}>
                    <Image className='borderRadius' src={product.image} alt={product.name} width={64} height={64} />
                    <div className={cartStyles.productInfoWrapper}>
                        <p className={`${typography.baseText} ${typography.noOpacityText} ${typography.boldText}`}>{product.name}</p>
                        <p className={`${typography.baseText} ${typography.boldText}`}>$ {product.price}</p>
                    </div>
                    <QuantityControlsBox 
                        class={cartStyles.quantityWrapper}
                        id={product.id}
                        quantity={product.quantity}
                        minusBtnHandler={(e) => decreaseQuantity(e)}
                        plusBtnHandler={(e) => increaseQuantity(e)}
                    />
                </div>
            );
        });
    }

    return (
        <>
            <div className={`borderRadius ${cartStyles.cartContainer}`}>
                <div className={cartStyles.flexContainer}>
                    <h2 className={typography.bold18px}>Cart ({productsInCart})</h2>
                    <button 
                        onClick={clearCart}
                        className={`${typography.baseText} ${cartStyles.removeBtn}`}
                    >
                        Remove all
                    </button>
                </div>
                {productsElements}
                <div className={cartStyles.flexContainer}>
                    <p className={`${typography.baseText} ${typography.uppercaseText}`}>Total</p>
                    <p className={typography.bold18px}>$ {totalPrice}</p>
                </div>
                <Link 
                    href='/'
                    className={`${buttons.baseButton} ${buttons.orangeButton} ${typography.upperCaseBold13px} ${buttons.fullWidthBtn}`}
                >
                    checkout
                </Link>
            </div>
            <div className='blackout'></div>
        </>
    );
}

export default Cart;