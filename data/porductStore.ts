// https://dummyjson.com/products?limit=10&skip=0

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export const productsData: Product[] = [
  {
    id: 1,
    title: "iPhone 15",
    price: 1200,
    category: "smartphones",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "MacBook Pro",
    price: 2400,
    category: "laptops",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Perfume",
    price: 80,
    category: "fragrances",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Samsung Galaxy",
    price: 900,
    category: "smartphones",
    image: "https://via.placeholder.com/150",
  },
];