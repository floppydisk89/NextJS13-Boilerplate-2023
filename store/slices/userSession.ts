import { createSlice } from '@reduxjs/toolkit';

type PayloadAction = {
  payload: number;
};

type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};

export const userSession = createSlice({
  name: 'userSession',
  initialState,
  reducers: {
    // Example with action payload
    // increment: (state: State, action: PayloadAction): void => {
    //   console.log(`[Increment] - Store received ${action}`);
    //   state.count += 1;
    // },
    increment: (state: State): void => {
      state.count += 1;
    },
    decrement: (state: State): void => {
      state.count -= 1;
    },
    clearState: (state: State): void => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, clearState } = userSession.actions;

export default userSession.reducer;
