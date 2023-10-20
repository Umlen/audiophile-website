import { ProductInCartType, ProductType } from '@/types/types';

type GetLocalStorageCartType = () => ProductInCartType[];

type ChangeQuantityType = (
  id: string, cartItems: ProductInCartType[]
) => ProductInCartType[];

type ProductsCategoryFilterType = (
  category: string,
  productsData: ProductType[]
) => ProductType[];

type PlaceNewProductsFirstType = (products: ProductType[]) => ProductType[];

export const addCommaToPrice = (price: number) => {
  let priceStr = String(price);
  const resultArr: string[] = [];

  while (priceStr.length >= 3) {
    const partStr = priceStr.slice(-3);
    priceStr = priceStr.slice(0, priceStr.length - 3);
    resultArr.push(partStr);
  }

  if (priceStr.length) {
    resultArr.push(priceStr);
  }  

  return resultArr.reverse().join(',');
};

export const totalPriceCalculation = (cartItems: ProductInCartType[]) => {
  return cartItems.reduce((total, {price, quantity}) => total += price * quantity, 0);
};

export const getLocalStorageCart: GetLocalStorageCartType = () => {
  const localStorageCart = localStorage.getItem('cart');

  return localStorageCart ? JSON.parse(localStorageCart) : [];
};

export const increaseQuantity: ChangeQuantityType = (id, cartItems) => {
  const newCartItems = cartItems.map(item => {
    return item.id === id
      ? {...item, quantity: item.quantity + 1}
      : item;
  });

  localStorage.setItem('cart', JSON.stringify(newCartItems));
  return newCartItems;
};

export const decreaseQuantity: ChangeQuantityType = (id, cartItems) => {
  const newCartItems = cartItems.reduce((newArr: ProductInCartType[], currItem) => {
    if (currItem.id === id) {
      if (currItem.quantity > 1) {
        newArr.push({...currItem, quantity: currItem.quantity - 1});
      }
    } else {
      newArr.push(currItem);
    }
    
    return newArr;
  }, []);

  newCartItems.length
    ? localStorage.setItem('cart', JSON.stringify(newCartItems))
    : localStorage.clear();

  return newCartItems;
};

export const productsCategoryFilter: ProductsCategoryFilterType = (category, productsData) => {
  return productsData.filter(product => product.category === category);
}

export const placeNewProductsFirst: PlaceNewProductsFirstType = (products) => {
  return products.sort((a, b) => Number(b.isNew) - Number(a.isNew));
}

export const sumCalculation = (cartItems: ProductInCartType[]) => {
  const totalPrice = totalPriceCalculation(cartItems);
  const vatCost = Math.floor(totalPrice * 0.2);
  const shippingCost = Math.ceil(totalPrice * 0.01);
  const grandTotal = totalPrice + shippingCost;

  return {totalPrice, vatCost, shippingCost, grandTotal};
};
