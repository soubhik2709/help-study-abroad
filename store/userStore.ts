// For dummyjson api
// import { create } from 'zustand';
// export interface User{
//     id:number;
//     firstName: string;
//     email: string;

// }

// interface UserState {
//   users: User[];
//   total: number;
//   cache: Record<string, User[]>;
//   fetchUsers: (limit: number, skip: number, search?: string) => Promise<void>;
// }

// export const useUserStore = create<UserState>((set, get) => ({
//   users: [],
//   total: 0,
//   cache: {},
//   fetchUsers: async (limit, skip, search = '') => {
//     const cacheKey = `${skip}-${search}`;
//     if (get().cache[cacheKey]) {
//         console.log(get().cache[cacheKey]);//Testing 
//       set({ users: get().cache[cacheKey] });
//       return;
//     }

//     try {
//         const url = search
//       ? `https://dummyjson.com/users/search?q=${search}&limit=${limit}&skip=${skip}`
//       : `https://dummyjson.com/users?limit=${limit}&skip=${skip}`;
      
//       console.log("Fetching:", url);

//       const res = await fetch(url);

//       console.log("Response:", res);

//       if(!res.ok){
//         throw new Error(`Failed to fetch users: ${res.status}`);
//       }
//       const data = await res.json();

//       set((state) => ({
//       users: data.users,
//       total: data.total,
//       cache: { ...state.cache, [cacheKey]: data.users },
//     }));
//     } catch (error) {
//        console.error("User fetch error:", error);
//     }


//   },
// }));


// As i dont use dummyjson api, so i commented this,cause for multiple time redirecting , testing , the CORS problem occurs


import {create} from "zustand";
import { usersData,User } from "../data/users";

interface UserState{
  users: User[]; 
  total: number; 
  fetchUsers:(
    limit:number,
    skip:number,
    search?:string) =>promise<void>;
  
}


export const useUserStore = create<UserState>((set) => ({
  users: [],
  total: 0,
  fetchUsers: async (limit, skip, search = "") => {
    let filteredUsers = usersData;

    // SEARCH
    if (search) {
      filteredUsers = usersData.filter((user) =>
        user.firstName
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }
        // PAGINATION
    const paginatedUsers = filteredUsers.slice(
      skip,
      skip + limit
    );
    console.log("user",paginatedUsers);

    set({
      users: paginatedUsers,
      total: filteredUsers.length,
    });
  },
}));