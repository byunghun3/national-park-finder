const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(express.json());
app.use(cors());

const usersRouter = require("./routes/users");

app.use("/users", usersRouter);

mongoose.connect(process.env.DB_URI);


app.listen(8000, () => {
    console.log("server running on port 8000");
});