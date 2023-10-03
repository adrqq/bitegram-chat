import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import UserService from "../../services/UserService";

interface UserState {}

const initialState: UserState = {};

export const searchUsers = createAsyncThunk(
  "searchUsers",
  async (searchQuery: string, { rejectWithValue }) => {
    try {
      const response = await UserService.searchUsers(searchQuery);

      return response.data;
    } catch (e: any) {
      return rejectWithValue(false);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [searchUsers.fulfilled.type]: (state, action: PayloadAction<any>) => {
      console.log("action", action);
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
