export type ProductType = {
  id: number;
  slug: string;
  name: string;
  cart: CartType;
  image: ImageType;
  category: string;
  categoryImage: ImageType;
  new: boolean;
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

type ImageType = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type IncludesType = {
  quantity: number;
  item: string;
};

type OthersType = {
  slug: string;
  name: string;
  image: ImageType;
};

export type ProductObjType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};
