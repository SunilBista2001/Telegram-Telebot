import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wallet: null,
};

const WalletSlice = createSlice({
  name: "WalletSlice",
  initialState,
  reducers: {
    setWallet: (state, action) => {
      state.wallet = action.payload;
    },
  },
});

export const { setWallet } = WalletSlice.actions;

export default WalletSlice.reducer;
