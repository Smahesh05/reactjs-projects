const express = require("express");
const connectDb = require("./db");
const cookiParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use("/api/auth", require("./JWTAuth/routes"));

app.use(cookiParser());

app.listen(3000, () => {
  console.log("server running on", 3000);
});

connectDb();
