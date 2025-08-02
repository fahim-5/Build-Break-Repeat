// match from database authentication
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");



const bcrypt = require('bcrypt');
const saltRounds = 10;


const app = express();
const PORT = process.env.PORT || 5000;
const dbURL = process.env.MONGO_URL;


mongoose.set('strictQuery', true);

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("mongodb atlas is connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });



app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// very low lavel authencaticatoion . this only check the exsistencey of the email
// and the password in the database
// // this is not a secure way to authenticate users, use bcrypt or other libraries for hashing passwords  
// here they using email for filter ans passowrd is then checking by string matching.MONGO_URL
// this is lavel one autthenctication



app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.status(500).json({ status: "Error comparing passwords" });
        }
        if (result === true) {
          return res.status(200).json({ status: "valid user" });
        } else {
          return res.status(401).json({ status: "Invalid credentials" });
        }
      });
    } else {
      res.status(404).json({ status: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ status: "Internal server error", message: error.message });
  }
});


// route not found error
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});




app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//handling server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something broke",
  });
});





app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});