import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../interfaces/RootState';

const initialState: RootState = {
  app: '',
  isUserProfileModalOpen: false,
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setIsUserProfileModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isUserProfileModalOpen = action.payload;
    }
  },
});

export const {
  setIsUserProfileModalOpen,
} = rootSlice.actions;

export default rootSlice.reducer;