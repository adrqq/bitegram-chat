import { BASE_URL } from "../http";
import io from "socket.io-client";

const socket = io(BASE_URL);

socket.on('connect', () => {
  console.log('connected with id:', socket.id);
});

export default socket;
