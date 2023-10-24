import { type ProductInCartType, type ProductType } from '@/types/types';

type ChangeQuantityType = (
  id: string,
  cartItems: ProductInCartType[],
) => ProductInCartType[];

type ProductsCategoryFilterType = (
  category: string,
  productsData: ProductType[],
) => ProductType[];

type ProductsSlugFilter = (
  slug: string,
  productsData: ProductType[],
) => ProductType;

type PlaceNewProductsFirstType = (products: ProductType[]) => ProductType[];

export const addCommaToPrice = (price: number): string => {
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

export const increaseQuantity: ChangeQuantityType = (id, cartItems) => {
  const newCartItems = cartItems.map((item) => {
    return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
  });

  localStorage.setItem('cart', JSON.stringify(newCartItems));
  return newCartItems;
};

export const decreaseQuantity: ChangeQuantityType = (id, cartItems) => {
  const newCartItems = cartItems.reduce(
    (newArr: ProductInCartType[], currItem) => {
      if (currItem.id === id) {
        if (currItem.quantity > 1) {
          newArr.push({ ...currItem, quantity: currItem.quantity - 1 });
        }
      } else {
        newArr.push(currItem);
      }

      return newArr;
    },
    [],
  );

  newCartItems.length
    ? localStorage.setItem('cart', JSON.stringify(newCartItems))
    : localStorage.clear();

  return newCartItems;
};

export const productsCategoryFilter: ProductsCategoryFilterType = (
  category,
  productsData,
) => {
  return productsData.filter((product) => product.category === category);
};

export const productsSlugFilter: ProductsSlugFilter = (slug, productsData) => {
  return productsData.filter((product) => product.slug === slug)[0];
};

export const placeNewProductsFirst: PlaceNewProductsFirstType = (products) => {
  return products.sort((a, b) => Number(b.isNew) - Number(a.isNew));
};
