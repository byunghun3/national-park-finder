const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(express.json());

const corsOptions = {
    allowedHeaders: ["Content-Type", "authorization"],
    origin: ["https://byunghun3.github.io/national-park-finder/"]
};
app.use(cors(corsOptions));

const usersRouter = require("./routes/users");

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use("/users", usersRouter);

mongoose.connect(process.env.DB_URI);


app.listen(process.env.PORT || 8000, () => {
    console.log("server running on port 8000");
});