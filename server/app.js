const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(express.json());
app.use(cors());

const usersRouter = require("./routes/users");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://byunghun3.github.io/national-park-finder/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/users", usersRouter);

mongoose.connect(process.env.DB_URI);


app.listen(process.env.PORT || 8000, () => {
    console.log("server running on port 8000");
});