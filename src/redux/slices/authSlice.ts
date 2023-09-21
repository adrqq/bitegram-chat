import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import AuthService from "../../services/AuthService";

interface AuthState {
  user: IUser | {};
  isUserAuth: boolean;
}

export const login = createAsyncThunk(
  "login",
  async (payload: { email: string; password: string }, { rejectWithValue }) => {
    try {
      console.log("payload", payload);
      const response = await AuthService.login(payload.email, payload.password);

      return response.data.user;
    } catch (e: any) {
      return rejectWithValue(false);
    }
  }
);

export const register = createAsyncThunk(
  "register",
  async (
    payload: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      nickname:string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await AuthService.register(
        payload.email,
        payload.password,
        payload.firstName,
        payload.lastName,
        payload.nickname
      );

      return response.data.user;
    } catch (e: any) {
      return rejectWithValue(false);
    }
  }
);

const initialState: AuthState = {
  user: {},
  isUserAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
