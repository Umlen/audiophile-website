import { ProductInCartType } from '@/types/types';
import { addCommaToPrice } from './utils';

export const totalPriceCalculation = (cart: ProductInCartType[]) => {
  return cart.reduce((total, {price, quantity}) => total += price * quantity, 0);
};

export const vatCalculation = (total: number) => {
  return Math.floor(total * 0.2);
};

export const shippingCalculation = (total: number) => {
  return Math.ceil(total * 0.01);
};

export const grandTotalCalculation = (total: number, shipping: number) => {
  return total + shipping;
};

export const createCheckoutSums = (cart: ProductInCartType[]) => {
  const total = totalPriceCalculation(cart);
  const vat = vatCalculation(total);
  const shipping = shippingCalculation(total);
  const grandTotal = grandTotalCalculation(total, shipping)

  return {
    total: addCommaToPrice(total),
    vat: addCommaToPrice(vat),
    shipping: addCommaToPrice(shipping),
    grandTotal: addCommaToPrice(grandTotal),
  };
};
