import create from "zustand";
import { persist } from "zustand/middleware";

const useTestStore = create(
  persist(
    (set) => ({
      testIds: [], // Array to store multiple test IDs

      // Add a new test ID to the array
      addTestId: (id) =>
        set((state) => ({
          testIds: [...state.testIds, id],
        })),

      // Clear all test IDs (optional for cleanup purposes)
      clearTestIds: () => set({ testIds: [] }),
    }),
    {
      name: "test-storage", // Key name in localStorage
    }
  )
);

export default useTestStore;
