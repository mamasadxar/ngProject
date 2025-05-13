export interface Price {
  current: number;
  currency: string;
  beforeDiscount: number;
  discountPercentage: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  issueDate: string;
  thumbnail: string;
  stock: number;
  rating: number;
  brand: string;
  warranty: number;
  price: Price;
  category: Category;
  images: string[];
}