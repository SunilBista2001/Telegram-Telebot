import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./slices/CategorySlice";
import WalletSlice from "./slices/WalletSlice";

export const store = configureStore({
  reducer: {
    category: CategorySlice,
    wallet: WalletSlice,
  },
});
