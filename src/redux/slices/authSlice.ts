import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import AuthService from "../../services/AuthService";


interface AuthState {
  user: IUser | {};
  isUserAuth: boolean;
  activationEmail: string;

  isLoginLoading: boolean;
  isLoginError: boolean;

  isRegisterLoading: boolean;
  isRegisterError: boolean;
}

const initialState: AuthState = {
  user: {},
  isUserAuth: false,
  activationEmail: "",

  isLoginLoading: false,
  isLoginError: false,

  isRegisterLoading: false,
  isRegisterError: false,
};

export const login = createAsyncThunk(
  "login",
  async (payload: { email: string; password: string }, { rejectWithValue }) => {
    try {
      console.log("payload", payload);
      const response = await AuthService.login(payload.email, payload.password);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
      }

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

      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);

        return response.data.user;
      }

      return response.data.user;
    } catch (e: any) {
      return rejectWithValue(false);
    }
  }
);

export const checkAuth = createAsyncThunk(
  "checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthService.checkAuth();

      console.log("response", response);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        
        return response.data.user;
      }

      return rejectWithValue('Invalid response from the server');
    } catch (e: any) {
      return rejectWithValue(`Authentication failed: ${e.message}`);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [login.fulfilled.type]: (state, action:PayloadAction<IUser>) => {
      state.activationEmail = action.payload.email;
      state.isUserAuth = true;
      state.user = action.payload;
      state.isLoginLoading = false;
      state.isLoginError = false;
    },
    [login.rejected.type]: (state) => {
      state.isLoginLoading = false;
      state.isLoginError = true;
    },
    [login.pending.type]: (state) => {
      state.isLoginLoading = true;
      state.isLoginError = false;
    },

    [register.fulfilled.type]: (state, action:PayloadAction<IUser>) => {
      state.activationEmail = action.payload.email;
      state.isRegisterLoading = false;
      state.isRegisterError = false;
    },
    [register.rejected.type]: (state) => {
      state.isRegisterLoading = false;
      state.isRegisterError = true;
    },
    [register.pending.type]: (state) => {
      state.isRegisterLoading = true;
      state.isRegisterError = false;
    },

    [checkAuth.fulfilled.type]: (state, action:PayloadAction<IUser>) => {
      state.isUserAuth = true;
      state.user = action.payload;
      console.log("checkAuth", action.payload);
    }
  }

});

export const {} = authSlice.actions;

export default authSlice.reducer;
