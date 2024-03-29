const express = require("express");
const http = require("http");

const { Server } = require("socket.io");

const PORT = 5000;

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.get("/", (req, res) => {
  res.send("get request from localhost server");
});

io.on("connection", (socket) => {
  console.log("User connected", socket.id);

  socket.on("message", ({ message, room }) => {
    console.log({ message, room });
    socket.to(room).emit("received-message", { message, room });
  });

  socket.on("join-room", (room) => {
    socket.join(room);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected", `${socket.id} disconnected`);
  });
});

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
