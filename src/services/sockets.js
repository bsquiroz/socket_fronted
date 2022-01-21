import io from "socket.io-client";
const baseURL = "http://localhost:3001";

export const socket = io.connect(baseURL);
