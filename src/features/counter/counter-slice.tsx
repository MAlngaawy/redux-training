import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    incremented3(state, action) {
      state.value += action.payload;
    },
  },
});

export const { incremented, incremented3 } = counterSlice.actions;
export default counterSlice.reducer;
