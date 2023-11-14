import { Dispatch } from 'redux'; // Import the Dispatch type
import socket from ".";
import { useAppDispatch } from "../hooks/redux";
import { IFriendRequest } from '../models/IFriendRequest';
import { setCallFetchRequestors } from '../redux/slices/userSlice';

// socket.on('newFriendRequest', (data: any) => {
//     console.log('newFriendRequest', data);
// });

export function sendFriendRequestSocket(userId: string, friendId: string) {
  socket.emit('addFriend', {
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

export const setupUserSocket = (dispatch: Dispatch) => { // Use the Dispatch type
  socket.on('testSocket', async () => {
    alert('testSocket');
  });

  // socket.on('newFriendRequest', async (data: IFriendRequest) => {
  //   console.log('newFriendRequest', data);
  //   alert('newFriendRequest');

  //   dispatch(setCallFetchRequestors())
  // });

  // socket.on('addFiendTest', (user, friend) => {
  //   alert('ADD FRIEND TEST');
  // })

  socket.on('friendRequestSent', () => {
    alert('friendRequestSent');

    dispatch(setCallFetchRequestors())
  })
};

export default socket;
