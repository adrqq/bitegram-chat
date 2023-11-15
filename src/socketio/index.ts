import { BASE_URL } from "../http";
import io from "socket.io-client";

const socket = io(BASE_URL, {
  query: { userId: '' },
  autoConnect: false,
  transports: ["websocket"],
});

export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
  }
}

export const connectSocket = async (userId: string) => {
  socket.io.opts.query = { userId };

  // Connect the socket
  await new Promise<void>((resolve, reject) => {
    socket.once('connect', () => {
      console.log('Connected with user ID:', userId);
      resolve(); // Resolve the promise when the connection is established
    });

    socket.once('connect_error', (error) => {
      reject(error); // Reject the promise if there's an error
    });

    socket.connect();
  });
};

export default socket;
