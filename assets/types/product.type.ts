export type Data<T = any> = Record<string, T>;

export interface ISingleProduct {
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  sold: number;
  price: number;
  colors?: any[];
  image: string;
  galary?: string[];
  ratingAvarage: number;
  ratingQuantity: number;
  category: Category;
  subcategory?: any[];
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Category {
  _id: string;
  name?: string;
}
