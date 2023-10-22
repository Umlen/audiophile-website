import { ProductInCartType } from '@/types/types';

export const totalPriceCalculation = (cartItems: ProductInCartType[]) => {
  return cartItems.reduce((total, {price, quantity}) => total += price * quantity, 0);
};

export const sumCalculation = (cartItems: ProductInCartType[]) => {
  const totalPrice = totalPriceCalculation(cartItems);
  const vatCost = Math.floor(totalPrice * 0.2);
  const shippingCost = Math.ceil(totalPrice * 0.01);
  const grandTotal = totalPrice + shippingCost;

  return {totalPrice, vatCost, shippingCost, grandTotal};
};
