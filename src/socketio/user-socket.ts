import { Dispatch } from "@reduxjs/toolkit";
import socket from ".";
import { IFriendRequest } from '../models/IFriendRequest';
import {
  getUserById,
  setCallFetchRequestors,
  setSelectedUserStatus
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

export const setupUserSocket = async (dispatch: any) => {
  socket.on('newFriendRequest', async (data: IFriendRequest) => {
    alert(`newFriendRequest ${data}`);

    dispatch(getUserById(data.friendId))
      .then((response: any) => {
        dispatch(setUser(response.payload));
      });

    dispatch(setSelectedUserStatus(ProfileStatus.FRIEND_REQUEST_RECEIVED));
  });

  socket.on('friendRequestSent', async (data: IFriendRequest) => {
    alert(`friendRequestSent ${data}`);

    dispatch(setSelectedUserStatus(ProfileStatus.FRIEND_REQUEST_SENT));
  });

  socket.on('friendRequestAccepted', async (data: IFriendRequest) => {
    alert(`friendRequestAccepted ${data}`);

    dispatch(getUserById(data.friendId))
      .then((response: any) => {
        dispatch(setUser(response.payload));
      });

    dispatch(setSelectedUserStatus(ProfileStatus.FRIEND));
  });

  socket.on('friendDeleted', async (data: IFriendRequest) => {
    alert(`friendDeleted ${data}`);

    dispatch(setSelectedUserStatus(ProfileStatus.NOT_FRIEND));
  });
};

export default socket;
