import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../interfaces/RootState';

const initialState: RootState = {
  app: '',
  isChatModalOpen: false,
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    handleModalOpener: (state, action: PayloadAction<boolean>) => {
      state.isChatModalOpen = action.payload;
    }
  },
});

export const { handleModalOpener } = rootSlice.actions;
export default rootSlice.reducer;