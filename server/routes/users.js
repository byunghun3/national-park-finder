const express = require("express");
const router = express.Router();
const UserModel = require("../models/Users");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

dotenv.config();

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const accessToken = authHeader.split(" ")[1];
        const verified = jwt.verify(accessToken, process.env.SECRET_KEY);
        try {
            req.user = verified;
            next();
        } catch (err) {
            res.status(403).json({ message: err.message });
        }
    } else {
        res.status(401).json("Access Denied");
    }
};

router.get("/", async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/:userId", verify, async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userId);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/signup", async (req, res) => {
    try {
        const userExists = await UserModel.findOne({
            username: req.body.username
        });

        if (userExists) {
            res.status(400).json("User already exists");
        } else if (req.body.password.length < 6) {
            res.status(400).json("Password must be at least 6 characters");
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password, salt);
            const newUser = new UserModel({
                name: req.body.name,
                username: req.body.username,
                password: hashPassword
            });
            newUser.save();
            res.status(201).json(newUser);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await UserModel.findOne({
            username: req.body.username
        });
        const bcryptedPassword = await bcrypt.compare(req.body.password, user.password);

        if (!user || !bcryptedPassword) {
            res.status(400).json("Invalid username or password");
        } else {
            const accessToken = jwt.sign({ username: user.username }, process.env.SECRET_KEY);
            res.status(201).json({ user, accessToken });
            res.header("authorization", accessToken).json({ user: user, accessToken: accessToken });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete("/login", async (req, res) => {
    try {
        const userLogOut = await UserModel.remove({
            username: req.body.username,
            // password: req.body.password
        });
        res.status(200).json(userLogOut);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete("/:userId", verify, async (req, res) => {
    try {
        const loggedOutUser = await UserModel.remove({ _id: req.params.userId });
        res.status(200).json(loggedOutUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.patch("/:userId/:parkId", verify, async (req, res) => {
    const user = await UserModel.findById(req.params.userId);

    const parkExists = user.parkId.find(park => {
        return park === req.body.parkId;
    });

    if (parkExists) {
        try {
            await UserModel.findByIdAndUpdate(req.params.userId,
                { $pull: { parkId: req.body.parkId } },
                { new: true }
            );
            res.json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    } else {
        try {
            await UserModel.findByIdAndUpdate(req.params.userId,
                { $push: { parkId: req.body.parkId } },
                { new: true }
            );
            res.json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
});

router.delete("/:userId/:parkId", verify, async (req, res) => {
    const user = await UserModel.findById(req.params.userId);
    try {
        await UserModel.findByIdAndRemove(req.params.userId,
            { $pull: { parkId: req.body.parkId } },
            { new: true }
        );
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;