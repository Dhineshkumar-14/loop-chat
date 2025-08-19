import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: " http://localhost:3000",
  },
});

const onlineUsers = {};

const getReceiverSocketId = (receiverId) => {
  return onlineUsers[receiverId];
};

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  if (userId && userId !== "undefined") {
    onlineUsers[userId] = socket.id;
  }
  io.emit("getOnlineUsers", Object.keys(onlineUsers));
  socket.on("disconnect", () => {
    if (userId) {
      delete onlineUsers[userId];
    }
    io.emit("getOnlineUsers", Object.keys(onlineUsers));
  });
});

export { app, io, server, getReceiverSocketId };
