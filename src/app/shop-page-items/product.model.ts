export interface ProductResponse {
  total: number;
  limit: number;
  page: number;
  skip: number;
  products: Product[];
}

export interface Product {
  price: Prices;
  category: Category;
  _id: string;
  title: string;
  description: string;
  issueDate: string;
  thumbnail: string;
  stock: number;
  rating: number;
  brand: string;
  warranty: number;
  images: Array<string>;
}

export interface Prices {
  current: number;
  currency: string;
  beforeDiscount: number;
  discountPercentage: number;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}