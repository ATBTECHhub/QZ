import {create} from "zustand";
import { persist } from "zustand/middleware";

const useTestStore = create(
  persist(
    (set) => ({
      testId: null, // Store only one test ID

      // Set a new test ID
      setTestId: (id) => set({ testId: id }),

      // Clear the test ID (optional for cleanup)
      clearTestId: () => set({ testId: null }),
    }),
    {
      name: "test-storage", // Key for localStorage persistence
    }
  )
);

export default useTestStore;

