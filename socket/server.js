const { createServer } = require("http");
const { Server } = require("socket.io");
const Redis = require("ioredis");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

const redis = new Redis(6379);

redis.subscribe("chat");
redis.on("message", (channel, message) => {
  io.emit(channel, message);
});

io.on("connection", (socket) => {
  console.log("A user connected");

  //Join chat
  socket.on("joinChat", () => {
    console.log("A user disconnected");
  });


  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

httpServer.listen(3001, () => {
  console.log("Socket.io server running on port 3001");
});
