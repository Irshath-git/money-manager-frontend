import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  transaction: [],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    getTransacitons: (state) => {},
  },
});

export const { getTransacitons } = expenseSlice.actions;
export default expenseSlice.reducer;
