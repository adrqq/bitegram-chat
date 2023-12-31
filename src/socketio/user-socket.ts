import { Dispatch } from "@reduxjs/toolkit";
import socket from ".";
import { IFriendRequest } from '../models/IFriendRequest';
import {
  getUserById,
} from '../redux/slices/userSlice';
import { ProfileStatus } from '../types/ProfileStatus';
import { setUser } from '../redux/slices/authSlice';

export function sendFriendRequestSocket(userId: string, friendId: string) {
  socket.emit('addFriend', {
    userId,
    friendId,
  });
}

export function deleteFriendSocket(userId: string, friendId: string) {
  socket.emit('deleteFriend', {
    userId,
    friendId,
  });
}

export function acceptFriendRequestSocket(userId: string, friendId: string) {
  socket.emit('acceptFriendRequest', {
    userId,
    friendId,
  });
}

export const setupUserSocket = async (dispatch: any, getState: any) => {
  const updateUser = async () => {
    const user = await getState().authSlice.user;

    if (user.id) {
      dispatch(getUserById(user.id))
        .then((response: any) => {
          dispatch(setUser(response.payload));
        });
    }
  }

  socket.on('newFriendRequest', async (data: IFriendRequest) => {
    alert(`newFriendRequest ${JSON.stringify(data)}`);

    await updateUser();
  });

  socket.on('friendRequestSent', async (data: IFriendRequest) => {
    alert(`friendRequestSent ${JSON.stringify(data)}`);

    await updateUser();
  });

  socket.on('friendRequestAccepted', async (data: IFriendRequest) => {
    alert(`friendRequestAccepted ${JSON.stringify(data)}`);

    await updateUser();
  });

  socket.on('friendDeleted', async (data: IFriendRequest) => {
    alert(`friendDeleted ${JSON.stringify(data)}`);

    await updateUser();
  });
};

export default socket;
