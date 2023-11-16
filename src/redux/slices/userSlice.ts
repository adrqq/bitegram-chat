import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import UserService from '../../services/UserService';
import { IFriend } from '../../models/IFriend';
import { ISelectedUser } from '../../models/ISelectedUser';
import { IChat } from '../../models/IChat';
import { ISelectedChat } from '../../models/ISelectedChat';

interface UserState {
  selectedUser: IUser;
  friendRequestSent: IFriend[];
  friendRequestReceived: IFriend[];
  chats: IChat[];
  selectedChat: ISelectedChat;
}

const initialState: UserState = {
  selectedUser: {} as IUser,
  friendRequestSent: [],
  friendRequestReceived: [],
  chats: [] as IChat[],
  selectedChat: {} as ISelectedChat,
};

// export const getChatsInfoList = createAsyncThunk(
//   'getChatsInfoList',
//   async (chatId: string, { rejectWithValue }) => {
//     try {
//       const response = await UserService.getChatsInfoList(chatId);
//       console.log('getChatsInfoList response:', response); // Debugging

//       return response.data;
//     } catch (error) {
//       console.error('getChatsInfoList error:', error); // Debugging
//       return rejectWithValue(false);
//     }
//   }
// )

export const getChatById = createAsyncThunk(
  'getSelectedChatInfo',
  async (chatId: string, { rejectWithValue }) => {
    try {
      if (!chatId) {
        return rejectWithValue(false);
      }

      const response = await UserService.getChatById(chatId);

      return response.data;
    } catch (error) {
      console.error('getSelectedChatInfo error:', error); // Debugging
      return rejectWithValue(false);
    }
  }
)

export const createChat = createAsyncThunk(
  'createChat',
  async (
    params: { userId: string; friendId: string },
    { rejectWithValue, getState }
  ) => {
    try {

      const user: IUser = (getState() as any).authSlice.user;

      if (!user.friends.includes(params.friendId)) {
        alert('You are not friends with this user!');
      }

      const response = await UserService.createChat(
        params.userId,
        params.friendId
      );

      return response.data;
    } catch (error) {
      console.error('createChat error:', error); // Debugging
      return rejectWithValue(false);
    }
  }
);

export const searchUsers = createAsyncThunk(
  'searchUsers',
  async (
    payload: { searchQuery: string; userId: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await UserService.searchUsers(
        payload.searchQuery,
        payload.userId
      );

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

      return response.data;
    } catch (error) {
      console.error('getUserById error:', error); // Debugging
      return rejectWithValue(false);
    }
  }
);

export const sendFriendRequest = createAsyncThunk(
  'sendFriendRequest',
  async (params: { userId: string; friendId: string }, { rejectWithValue }) => {
    try {
      const response = await UserService.sendFriendRequest(
        params.userId,
        params.friendId
      );

      return response.data;
    } catch (error) {
      console.error('sendFriendRequest error:', error); // Debugging
      return rejectWithValue(false);
    }
  }
);

export const checkFriendStatus = createAsyncThunk(
  'checkFriendStatus',
  async (params: { userId: string; friendId: string }, { rejectWithValue }) => {
    try {
      const response = await UserService.checkFriendStatus(
        params.userId,
        params.friendId
      );

      return response.data;
    } catch (error) {
      console.error('checkFriendStatus error:', error); // Debugging
      return rejectWithValue(false);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectedUser: (state, action: PayloadAction<IUser>) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: {
    [searchUsers.fulfilled.type]: (state, action: PayloadAction<any>) => {
      console.log('action', action);
    },
    [sendFriendRequest.fulfilled.type]: (state, action: PayloadAction<any>) => {
      console.log('action', action);
      state.friendRequestSent.push(action.payload);
    },
    [createChat.fulfilled.type]: (state, action: PayloadAction<any>) => {
      console.log('action', action);
    },
  },
});

export const { setSelectedUser } = userSlice.actions;

export default userSlice.reducer;
