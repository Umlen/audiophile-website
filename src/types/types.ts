export type ProductType = {
  id: string;
  slug: string;
  name: string;
  cart: CartType;
  image: ImageType;
  category: string;
  categoryImage: ImageType;
  isNew: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludesType[];
  gallery: ImageType[];
  others: OthersType[];
};

type CartType = {
  cartName: string;
  cartImage: string;
};

export type ImageType = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type IncludesType = {
  quantity: number;
  item: string;
};

export type OthersType = {
  slug: string;
  name: string;
  image: ImageType;
};

export type ProductInCartType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type CategoryType = {
  id: string;
  name: string;
  image: string;
};
