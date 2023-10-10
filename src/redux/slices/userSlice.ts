import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import UserService from "../../services/UserService";
import { IFriend } from "../../models/IFriend";

interface UserState {
  selectedUser: IUser;
  friendRequestSent: IFriend[];
  friendRequestReceived: IFriend[];
}

const initialState: UserState = {
  selectedUser: {} as IUser,
  friendRequestSent: [],
  friendRequestReceived: [],
};

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

export const getUserById = createAsyncThunk(
  'getUserById',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await UserService.getUserById(userId);
      console.log('getUserById response:', response); // Debugging

      return response.data;
    } catch (error) {
      console.error('getUserById error:', error); // Debugging
      return rejectWithValue(false);
    }
  }
);

export const sendFriendRequest = createAsyncThunk(
  'sendFriendRequest',
  async (params: {userId: string, friendId: string}, { rejectWithValue }) => {
    try {
      console.log('sendFriendRequest params:', params); // Debugging

      const response = await UserService.sendFriendRequest(params.userId, params.friendId);
      console.log('sendFriendRequest response:', response); // Debugging

      return response.data;
    } catch (error) {
      console.error('sendFriendRequest error:', error); // Debugging
      return rejectWithValue(false);
    }
  }
);


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedUser: (state, action: PayloadAction<IUser>) => {
      state.selectedUser = action.payload;
    }
  },
  extraReducers: {
    [searchUsers.fulfilled.type]: (state, action: PayloadAction<any>) => {
      console.log("action", action);
    },
    [getUserById.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.selectedUser = action.payload; // Ensure this is updating correctly
    },
    [sendFriendRequest.fulfilled.type]: (state, action: PayloadAction<any>) => {
      console.log("action", action);
      state.friendRequestSent.push(action.payload);
    }
  },
});

export const { setSelectedUser } = userSlice.actions;

export default userSlice.reducer;
