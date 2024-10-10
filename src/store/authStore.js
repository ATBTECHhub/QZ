import create from "zustand";
import { persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      role: null,

      setToken: (token) => {
        set({ token });
        // Decode JWT token to get user role
        const decoded = jwtDecode(token);
        const userRole = decoded?.role; 
        set({ role: userRole });

        console.log("User Role:", userRole);
      },
      setUser: (userData) => {
        set({ user: userData });
      },

      logout: () => {
        // Clear the token and user data
        set({ token: null, user: null, role: null });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
