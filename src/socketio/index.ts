import { BASE_URL } from "../http";
import io from "socket.io-client";

export const socket = io(BASE_URL);
