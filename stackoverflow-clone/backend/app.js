const express = require("express");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users/", require("./routes/userRoutes"));

app.listen(PORT, () => console.log(`PORT running on port ${PORT}`));
