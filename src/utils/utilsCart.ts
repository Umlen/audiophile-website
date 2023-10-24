import { type ProductInCartType, type ProductType } from '@/types/types';

type GetLocalStorageCartType = () => ProductInCartType[];

export const getLocalStorageCart: GetLocalStorageCartType = () => {
  const localStorageCart = localStorage.getItem('cart');

  return localStorageCart ? JSON.parse(localStorageCart) : [];
};

export const addProductToCart = (
  newProduct: ProductType,
  quantity: number,
): void => {
  const cart = getLocalStorageCart();
  const isProductDuplicated = searchDuplicatesInCart(cart, newProduct.id);

  if (isProductDuplicated) {
    const newCart = cart.map((product) => {
      return product.id === newProduct.id
        ? { ...product, quantity: product.quantity + quantity }
        : product;
    });

    localStorage.setItem('cart', JSON.stringify(newCart));
  } else {
    const product: ProductInCartType = {
      id: newProduct.id,
      name: newProduct.cart.cartName,
      price: newProduct.price,
      image: newProduct.cart.cartImage,
      quantity,
    };

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
};

export const searchDuplicatesInCart = (
  cart: ProductInCartType[],
  productId: string,
): boolean => {
  return !!cart.find((product) => product.id === productId);
};
