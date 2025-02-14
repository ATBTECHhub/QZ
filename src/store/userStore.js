import {create} from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      userData: { email: "", fullName: "" },
      setUserData: (data) => set({ userData: data }),
      resetUserData: () => set({ userData: { email: "", fullName: "" } }),
    }),
    {
      name: "user-storage", // Name for the localStorage key
    }
  )
);

export default useUserStore;
