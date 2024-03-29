const express = require("express");
const routes = require("./routes/userRoutes");
const postRoutes = require("./routes/blogPostRoutes");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/api/users/", routes);
app.use("/api/posts/", postRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log("listening on port", PORT));
