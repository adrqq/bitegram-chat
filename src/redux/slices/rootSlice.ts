import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../interfaces/RootState';

const initialState: RootState = {
  app: '',
  isUserProfileModalOpen: false,
  isFindModalOpen: false,
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setIsUserProfileModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isUserProfileModalOpen = action.payload;
    },
    setIsFindModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isFindModalOpen = action.payload;
    },
  },
});

export const {
  setIsUserProfileModalOpen,
  setIsFindModalOpen,
} = rootSlice.actions;

export default rootSlice.reducer;