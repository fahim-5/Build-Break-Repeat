

## 📁 Folder Structure

```
project-root/
├── models/
│   └── user.models.js
├── views/
│   └── index.html
├── app.js
├── package.json
├── package-lock.json
```

---


## 📄 `user.models.js` – Mongoose User Schema

```js
const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, // Corrected "require" to "required"
  },
  password: {
    type: String,
    required: true, // Corrected "require" to "required"
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
module.exports = mongoose.model("User", userSchema);
```

---

## 🗂️ `index.html` – Homepage View

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Authentication App</title>
  </head>
  <body>
    <h1>Welcome to Authentication</h1>
  </body>
</html>
```

---

## 🚀 `app.js` – Main Server File (Authentication Backend)

```js
// Load environment variables
require("dotenv").config();

// Import dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");

const app = express();
const PORT = process.env.PORT || 5000;
const dbURL = process.env.MONGO_URL;

// Connect to MongoDB Atlas
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("MongoDB Atlas is connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve HTML view
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Register route
app.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && user.password === password) {
      res.status(200).json({ status: "Valid user" });
    } else {
      res.status(404).json({ status: "Not valid user" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Handle 404 - Route not found
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Handle 500 - Server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Something broke" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
```

---



## 🔐 `.env` – Environment Variables

```
PORT=5000
MONGO_URL=mongodb+srv://fahim:12345@cluster0.mongodb.net/userAuthDb?retryWrites=true&w=majority

```


### Breakdown:

* `fahim`: your MongoDB username
* `12345`: your password (again, not safe for real-world use)
* `cluster0.mongodb.net`: your actual cluster host (from MongoDB Atlas)
* `userAuthDb`: your **database name**
* `?retryWrites=true&w=majority`: required for MongoDB Atlas connection

---

##  Summary of How Database-Match Authentication Works


1. The project has a simple folder structure with models, views, and main files (`app.js`, `package.json`).
2. A `user.models.js` file defines a Mongoose schema for storing user email, password, and creation date.
3. The `index.html` view contains a basic HTML structure with a welcome message.
4. `app.js` sets up an Express server with middleware for JSON parsing and CORS.
5. It connects to a MongoDB Atlas database using credentials stored in an `.env` file.
6. The server serves the homepage via the `/` route.
7. It handles user registration (`/register`) by saving new users to the database.
8. The `/login` route checks user credentials against stored values in MongoDB.
9. Custom handlers return JSON responses for 404 and 500 errors.
10. The `.env` file securely stores `PORT` and `MONGO_URL` for configuration.

---



### ✅ Steps to Use `mongoose-encryption`:

#### 1. **Install the package**:

```bash
npm install mongoose-encryption
```

---

#### 2. **Set up your User model** (`userModel.js` or similar):

```js
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

// Define the schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, // spelling fixed: require → required
  },
  password: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

// Encryption key (store securely in .env)
const encKey = process.env.ENC_KEY;

// Add encryption plugin to schema
userSchema.plugin(encrypt, {
  secret: encKey,
  encryptedFields: ["password"], // only encrypts 'password' field
});

// Export the model
module.exports = mongoose.model("User", userSchema);
```

---

### 🔐 Environment Setup (`.env` file):

Make sure your `.env` file includes a secure encryption key like this:

```
ENC_KEY=your32characterencryptionkeyhere!
```

**Important:** `ENC_KEY` must be **32 characters long**. You can generate one using Node.js:

```js
console.log(require("crypto").randomBytes(32).toString("hex"));
```

Then take the first 32 characters.

---

### ❗ Important Notes:

* `mongoose-encryption` encrypts the field **when saving** and **decrypts automatically** when retrieving.
* Don't encrypt the whole document unless needed — it may affect queries and performance.
* Never hardcode the encryption key — always use `process.env`.

---



