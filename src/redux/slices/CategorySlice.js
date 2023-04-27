import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  data: null,
};

const CategorySlice = createSlice({
  name: "CategorySlice",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.id = action.payload;
    },
    setCategoryData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setCategoryData, setCategoryId } = CategorySlice.actions;

export default CategorySlice.reducer;
