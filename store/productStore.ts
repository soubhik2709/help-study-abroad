// import { create } from "zustand";
// export interface Product {
//   id: number;
//   title: string;
//   price: number;
// }
// interface ProductState {
//   products: Product[];
//   fetchProducts: (limit: number, skip: number, search?: string, category?: string) => Promise<void>;
// }

// export const useProductStore = create<ProductState>((set) => ({
//   products: [],

//   fetchProducts: async (limit, skip, search = "", category = "") => {
//     let url = "";

//     if (category) {
//       url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
//     } else if (search) {
//       url = `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}`;
//     } else {
//       url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
//     }


//     try {
//     const res = await fetch(url);
//       if(!res.ok){
//                 throw new Error("Failed to fetch users");
//              }
//     const data = await res.json();
//     set({ products: data.products });

//     } catch (error) {
//     console.error("User fetch error:", error);
//     }

   

//   },
// }));



// ----------------------------------------

import { create } from "zustand";
import { productsData,Product } from "../data/porductStore";

interface ProductState {
  products: Product[];

  fetchProducts: (
    limit: number,
    skip: number,
    search?: string,
    category?: string
  ) => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],

  fetchProducts: async (
    limit,
    skip,
    search = "",
    category = ""
  ) => {
    let filteredProducts = productsData;

    // SEARCH
    if (search) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // CATEGORY FILTER
    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    // PAGINATION
    const paginatedProducts = filteredProducts.slice(
      skip,
      skip + limit
    );

    set({
      products: paginatedProducts,
    });
  },
}));