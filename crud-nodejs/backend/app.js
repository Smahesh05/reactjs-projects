const express = require("express");
const routes = require("./routes/taskRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

// task routes
app.use("/api/tasks", routes);

// mongoDB connection

connectDB();

app.listen(5000, console.log("listening on port" + 5000));
