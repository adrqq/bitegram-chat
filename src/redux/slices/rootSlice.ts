import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../interfaces/RootState';

const initialState: RootState = {
  app: '',
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
  },
});

export const { } = rootSlice.actions;
export default rootSlice.reducer;