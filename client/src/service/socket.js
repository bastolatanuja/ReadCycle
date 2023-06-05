import io from "socket.io-client";
const ENDPOINT = "https://localhost:5000/";

export const socket = io(ENDPOINT, { autoConnect: false });
