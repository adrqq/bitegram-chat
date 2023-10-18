import { socket } from "../socketio";

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

export default socket;
