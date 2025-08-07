require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("database connection is established");
  })
  .catch((error) => {
    console.log(error.message);
  });
