import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

const App = () => {
  const [messageData, setMessageData] = useState([]);
  const [room, setRoom] = useState("");
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [messageId, setMessageId] = useState("");

  const socket = useMemo(() => io("http://localhost:5000/"), []);

  const sendMessageHandler = (e) => {
    e.preventDefault();
    socket.emit("message", { message, room });
    setMessage("");
  };

  // join room function handler
  const joinRoomHandler = (e) => {
    e.preventDefault();
    socket.emit("join-room", roomName);
  };

  // useEffect function
  useEffect(() => {
    socket.on("connect", () => {
      setMessageId(socket.id);
      console.log("connected", socket.id);
    });

    socket.on("received-message", (data) => {
      console.log(data);
      setMessageData((prev) => [...prev, data]);
    });

    socket.on("welcome", (data) => {
      console.log("data", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="div" gutterBottom>
        {messageId}
      </Typography>

      <form onSubmit={joinRoomHandler}>
        <h5>Join Room</h5>
        <TextField
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          id="outlined-baic"
          label="RoomName"
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit">
          Join Room
        </Button>
      </form>

      <form onSubmit={sendMessageHandler}>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="outlined-baic"
          label="Message"
          variant="outlined"
        />
        <TextField
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          id="outlined-baic"
          label="Room"
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </form>

      <Stack>
        {messageData.map((msg, idx) => (
          <Typography key={idx} variant="contained" color="primary">
            {msg.message}
          </Typography>
        ))}
      </Stack>
    </Container>
  );
};

export default App;
