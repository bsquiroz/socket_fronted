import io from "socket.io-client";
const baseURL = "https://socket-back-brayan.herokuapp.com/";

export const socket = io.connect(baseURL);
