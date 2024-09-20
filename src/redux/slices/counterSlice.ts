import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment(state: number) {
      return state + 1;
    },
    decrement(state: number) {
      return state - 1;
    },
    addValue(state: number, action: PayloadAction<number>) {
      return state + action.payload;
    },
  },
});

export const { increment, decrement, addValue } = counterSlice.actions;
export default counterSlice.reducer;
