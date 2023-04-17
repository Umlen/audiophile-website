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

    function createProductsElements(cartArr) {
        return cartArr.map((product, key) => {
            return (
                <div key={key}>
                    <Image src={product.image} alt={product.name} width={64} height={64} />
                    <h4>{product.name}</h4>
                    <p>$ {product.price}</p>
                    <QuantityControlsBox 
                        id={product.id}
                        quantity={product.quantity}
                        minusBtnHandler={(e) => decreaseQuantity(e)}
                        plusBtnHandler={(e) => increaseQuantity(e)}
                    />
                </div>
            );
        });
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

    return (
        <>
            <div className={cartStyles.cartContainer}>
                <div>
                    <h2>Cart ({productsInCart})</h2>
                    <p onClick={clearCart}>Remove all</p>
                </div>
                <div>
                    <p>Total</p>
                    <p>$ {totalPrice}</p>
                </div>
                {productsElements}
                <Link href='/'>
                    checkout
                </Link>
            </div>
            <div className='blackout'></div>
        </>
    );
}

export default Cart;