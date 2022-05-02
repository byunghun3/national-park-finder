const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        min: 6,
        required: true
    },
    parkId: {
        type: Array
    }
}
);

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;