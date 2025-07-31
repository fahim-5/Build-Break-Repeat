const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3002;

// Middleware
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("✅ Connected to MongoDB successfully");
  } catch (error) {
    console.error("❌ DB connection error:", error.message);
    process.exit(1);
  }
};

// Product Schema & Model
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String
});

const mobiles = mongoose.model("Product", productSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start Server
app.listen(port, async () => {
  await connectDB();
  console.log(`🚀 Server running at http://localhost:${port}`);
});
