<p align="center">
  <strong>Fahim Faysal</strong><br>
  <sub>11-08-2025</sub>
</p>



## Authentication

* Database matching authentication
* Use **mongoose-encryption** package to encrypt user credentials
* Hash passwords using the **md5** package
* Use **bcrypt** package for salting and hashing passwords



---

<br>
<br>

# **Database Matching Authentication**

Database matching authentication means checking your login details against a database. If your username and password match the stored info, you get access. If not, you don’t. Simple as that.




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


## 📄 user.models.js – Mongoose User Schema

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

## 🗂️ index.html – Homepage View

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

## 🚀 app.js – Main Server File (Authentication Backend)

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



## 🔐 .env – Environment Variables

```
PORT=5000
MONGO_URL=mongodb+srv://fahim:fahim1234@cluster0.pf7ukrv.mongodb.net/userAuthDb 

```


### Breakdown:

* fahim: your MongoDB username
* 12345: your password (again, not safe for real-world use)
* cluster0.mongodb.net: your actual cluster host (from MongoDB Atlas)
* userAuthDb: your **database name**
* ?retryWrites=true&w=majority: required for MongoDB Atlas connection

---

##  Summary of How Database-Match Authentication Works


1. The project has a simple folder structure with models, views, and main files (app.js, package.json).
2. A user.models.js file defines a Mongoose schema for storing user email, password, and creation date.
3. The index.html view contains a basic HTML structure with a welcome message.
4. app.js sets up an Express server with middleware for JSON parsing and CORS.
5. It connects to a MongoDB Atlas database using credentials stored in an .env file.
6. The server serves the homepage via the / route.
7. It handles user registration (/register) by saving new users to the database.
8. The /login route checks user credentials against stored values in MongoDB.
9. Custom handlers return JSON responses for 404 and 500 errors.
10. The .env file securely stores PORT and MONGO_URL for configuration.

---

<br>
<br>
<br>

# **Steps to Use mongoose-encryption**

<br>


#### 1. **Install the package**:

```bash
npm install mongoose-encryption
```

---

#### 2. **Set up your User model** (userModel.js or similar):

```js
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

// Define the schema

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

### 🔐 Environment Setup (.env file):

Make sure your .env file includes a secure encryption key like this:

```
ENC_KEY=your32characterencryptionkeyhere!
```

**Important:** ENC_KEY must be **32 characters long**. You can generate one using Node.js:

```js
console.log(require("crypto").randomBytes(32).toString("hex"));
```

Then take the first 32 characters.

---

### ❗ Important Notes:

* mongoose-encryption encrypts the field **when saving** and **decrypts automatically** when retrieving.
* Don't encrypt the whole document unless needed — it may affect queries and performance.
* Never hardcode the encryption key — always use process.env.


<br>

> If an attacker gets access to the ***encryption key*** used by the ***mongoose-encryption*** package, they can easily decrypt sensitive data such as passwords. This is because the key is what locks and unlocks the encrypted fields. For this reason, it’s critical to keep the key **secure and out of your source code**, ideally stored in environment variables or a secure key management service.



---


<br>
<br>
<br>



# **Hashing password**

<br>

First install:

```bash
npm i md5
```

This time we don’t need the mongoose encryption key or any code related to mongoose-encryption.

Then we need to require ***md5*** where we are saving data in the database — basically in the register route.

Now our register route will look like:

```js
app.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      email: req.body.email,
      password: md5(req.body.password),
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
});
```

At login time, we need to do exactly the same thing we did in the registration time.

Our login route will look like:

```js
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = md5(req.body.password);
    const user = await User.findOne({ email: email });
    if (user && user.password === password) {
      res.status(200).json({ status: "valid user" });
    } else {
      res.status(404).json({ status: "Not valid user" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});
```

**Cons of this package:** For the same message, it will create the same hashing key again and again. That’s how a hacker can track our actual password.

---
Here’s the updated note with a **side-by-side MD5 vs bcrypt comparison table** added at the end:

---
<br>
<br>


# **Hashing password with bcrypt**

<br>

First install:

```bash
npm i bcrypt
```

Then require this in both the login and registration processes:

```js
const bcrypt = require("bcrypt");
const saltRounds = 10;
```

We can choose **technique 2** from the package documentation:

```js
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});
```

---

### **Register Route**

```js
app.post("/register", async (req, res) => {
  try {
    bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
      const newUser = new User({
        email: req.body.email,
        password: hash,
      });
      await newUser.save();
      res.status(201).json(newUser);
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});
```

---

### **Login Route**

```js
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          res.status(200).json({ status: "valid user" });
        } else {
          res.status(404).json({ status: "Not valid user" });
        }
      });
    } else {
      res.status(404).json({ status: "Not valid user" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});
```

---

### **Why bcrypt is safer than MD5**

* **MD5 is fast and predictable** — the same input will always produce the same output, making it easy for hackers to use precomputed hash tables (rainbow tables) to crack passwords.
* **bcrypt is slow and salted** — it adds a random salt to each password before hashing, meaning even the same password will have different hashes every time.
* The slowness of bcrypt makes brute-force attacks much harder, and the unique salt defeats rainbow table attacks.

---

### **MD5 vs bcrypt — Quick Comparison**

| Feature                | **MD5**                          | **bcrypt**                         |
| ---------------------- | -------------------------------- | ---------------------------------- |
| **Security Level**     | Weak (easily cracked)            | Strong (resistant to brute-force)  |
| **Speed**              | Very fast (bad for security)     | Slow (good for security)           |
| **Salting**            | No built-in salting              | Automatically salts every password |
| **Output**             | Always same for same input       | Different output each time         |
| **Use Case**           | Checksums, non-security purposes | Password storage                   |
| **Rainbow Table Risk** | High                             | None (due to unique salt)          |

---


