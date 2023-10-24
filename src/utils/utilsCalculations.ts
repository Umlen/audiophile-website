import { type ProductInCartType } from '@/types/types';
import { addCommaToPrice } from './utils';

type CreateCheckoutSumsType = (cart: ProductInCartType[]) => {
  total: string;
  vat: string;
  shipping: string;
  grandTotal: string;
};

export const totalPriceCalculation = (cart: ProductInCartType[]): number => {
  return cart.reduce(
    (total, { price, quantity }) => (total += price * quantity),
    0,
  );
};

export const vatCalculation = (total: number): number => {
  return Math.floor(total * 0.2);
};

export const shippingCalculation = (total: number): number => {
  return Math.ceil(total * 0.01);
};

export const grandTotalCalculation = (
  total: number,
  shipping: number,
): number => {
  return total + shipping;
};

export const createCheckoutSums: CreateCheckoutSumsType = (cart) => {
  const total = totalPriceCalculation(cart);
  const vat = vatCalculation(total);
  const shipping = shippingCalculation(total);
  const grandTotal = grandTotalCalculation(total, shipping);

  return {
    total: addCommaToPrice(total),
    vat: addCommaToPrice(vat),
    shipping: addCommaToPrice(shipping),
    grandTotal: addCommaToPrice(grandTotal),
  };
};
