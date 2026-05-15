import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthUser {
  id: number;
  username: string;
  email: string;
}

interface AuthState {
  token: string | null;
  user: AuthUser | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist( //middleware to save data to localStorage from refresh
    (set) => ({
      token: null,
      user: null,
      login: async (username, password) => {
        const res = await fetch('/api/proxy/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password ,expiresInMins: 60}),
        });
        console.log("the res at autStore is", res);
         if (!res.ok) {
          throw new Error("Invalid credentials");
        }
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        set({ token: data.token, user: data });
      },
      logout: () => set({ token: null, user: null }),
    }),
    { name: 'auth-storage' } // persists to localStorage automatically 
  )
);


/* 
Why --> Promise use here ? login: (username: string, password: string) => Promise<void>;
login is async function , if i write async with function name then it become async.so it return promise.so it finishes later. Here it does not return data.

*/