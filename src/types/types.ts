export interface ProductType {
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
}

interface CartType {
  cartName: string;
  cartImage: string;
}

export interface ImageType {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IncludesType {
  quantity: number;
  item: string;
}

export interface OthersType {
  slug: string;
  name: string;
  image: ImageType;
}

export interface ProductInCartType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CategoryType {
  id: string;
  name: string;
  image: string;
}

export interface LinkPropsType {
  href: string;
  text: string;
}
