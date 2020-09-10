const express = require("express");
const router = express.Router();
const path = require("path");
const validator = require("validator");
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const saltRounds = 10;

router.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../src", "index.html"));
});

router.post("/register", async (req, res) => {
  try {
    // console.log(req.body)
    const { email, password } = req.body;
    if (!validator.isEmail(email)) {
      return res.status(403).json({ error: { message: "введите email" } });
    }
    if (!validator.isLength(password, { min: 6 })) {
      return res.status(403).json({ error: { message: "невеный пароль" } });
    }

    const condidate = await User.findOne({email});

    if (condidate) {
      return res
        .status(403)
        .json({ error: { message: "такой Email уже зарегестрирован" } });
    } else {
      await User.create({ email, password });
      res.status(200).json({ message: "Успешно" });
    }
  } catch (e) {
    console.log("ERROR -", e);
  }
});

router.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../src", "index.html"));
  });
  

router.post("/login", async (req, res) => {
  try {
    // console.log(req.body)
    const { email, password } = req.body;
    if (!validator.isEmail(email)) {
      return res.status(403).json({ error: { message: "введите email" } });
    }
    if (!validator.isLength(password, { min: 6 })) {
      return res.status(403).json({ error: { message: "невеный пароль" } });
    }

    const condidate = await User.findOne({email});

    if (condidate) {
        if (condidate.password !== password) {
            return  res.status(403).json({ error: { message: "невеный пароль" } });
        }
      console.log(condidate);
      const token = await jwt.sign(
        { email: condidate.email, id: condidate._id },
        config.get("App.secret")
      );
      res.status(200).json({token, message:"Авторизирован"})
    } else {
      return res
        .status(403)
        .json({ error: { message: "такой Email не зарегестрирован" } });
    }
  } catch (e) {
    console.log("ERROR -", e);
  }
});

module.exports = router;
