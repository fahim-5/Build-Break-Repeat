<p align="center">
  <strong>Fahim Faysal</strong><br>
  <sub>14-08-2025</sub>
</p>

# **Passport-JWT Authentication**

## **Beginner’s Guide**

Passport.js with **JWT (JSON Web Token)** lets users log in without the server storing their session.  
Instead, the user carries a **token** — like a digital ID — and presents it whenever they interact with the server.

---

### **How it Works**

1. **Login** → User submits username & password.  
2. **Verification** → Server checks credentials.  
3. **Token Creation** → Server generates a **JWT**, signed with a secret key.  
4. **Token Storage** → User keeps the JWT (localStorage, sessionStorage, or cookie).  
5. **Requests** → User sends the JWT with every request.  
6. **Validation** → Server checks the token → grants access if valid & not expired.  

---

### **Why Use JWT?**

- Stateless → No server-side session storage.  
- Perfect for APIs, mobile apps, and microservices.  
- Secure, as long as you **keep your token safe**.  

---

💡 **Pro Tip:** Always set **expiry times** for JWTs and implement **refresh tokens** to maintain security and reduce frequent logins.


### 🔑 JWT Authentication Setup Notes

1. First of all, we need to create a **user login and register system** with **Node + Express**, and connect it with a database.

2. Then we have to install:

   ```bash
   npm i jsonwebtoken
   ```

3. Next, we import the package:

   ```js
   var jwt = require('jsonwebtoken');
   ```

4. Then we use this method:

   ```js
   jwt.sign(payload, secretOrPrivateKey, [options, callback])
   ```

5. Here, we have to use the **`expiresIn`** option, and also set a value for the **payload**.

6. Now we go to **Passport.js** and install **passport-jwt**.

7. In the config folder, we will create a file named **`passport.js`**, and paste this code inside:

   ```js
   var JwtStrategy = require('passport-jwt').Strategy,
       ExtractJwt = require('passport-jwt').ExtractJwt;

   var opts = {};
   opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
   opts.secretOrKey = 'secret';
   opts.issuer = 'accounts.examplesoft.com';
   opts.audience = 'yoursite.net';

   passport.use(
     new JwtStrategy(opts, function (jwt_payload, done) {
       User.findOne({ id: jwt_payload.sub }, function (err, user) {
         if (err) {
           return done(err, false);
         }
         if (user) {
           return done(null, user);
         } else {
           return done(null, false);
           // or you could create a new account
         }
       });
     })
   );
   ```

---

```js
require("dotenv").config();
const User = require("../models/user.model");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.id }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);
```

and in your **app.js**:

```js
const express = require("express");
const passport = require("passport");

const app = express();

// initialize passport
app.use(passport.initialize());
```


Here’s the structured version ⬇️

---

### 📂 `config/database.js`

```js
require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db is connected");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
```

---

### 📂 `config/passport.js`

```js
require("dotenv").config();
const User = require("../models/user.model");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.id }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);
```

---

### 📂 `models/user.model.js`

```js
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
```

---

### 📂 `app.js`

```js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const User = require("./models/user.model");
const saltRounds = 10;

const app = express();
require("./config/database");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

require("./config/passport");

// home route
app.get("/", (req, res) => {
  res.send("<h1> Welcome to the server </h1>");
});

// register route
app.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) return res.status(400).send("User already exists");

    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      const newUser = new User({
        username: req.body.username,
        password: hash,
      });

      await newUser
        .save()
        .then((user) => {
          res.send({
            success: true,
            message: "User is created Successfully",
            user: {
              id: user._id,
              username: user.username,
            },
          });
        })
        .catch((error) => {
          res.send({
            success: false,
            message: "User is not created",
            error: error,
          });
        });
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// login route
app.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(401).send({
      success: false,
      message: "User is not found",
    });
  }

  if (!bcrypt.compareSync(req.body.password, user.password)) {
    return res.status(401).send({
      success: false,
      message: "Incorrect password",
    });
  }

  const payload = {
    id: user._id,
    username: user.username,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "2d",
  });

  return res.status(200).send({
    success: true,
    message: "User is logged in successfully",
    token: "Bearer " + token,
  });
});

// profile route (protected)
app.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    return res.status(200).send({
      success: true,
      user: {
        id: req.user._id,
        username: req.user.username,
      },
    });
  }
);

// resource not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

// server error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
```

---

### 📂 `server.js`

```js
require("dotenv").config();
const app = require("./app");

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
```

---

✅ Now your backend project is **cleanly separated** into

* `config/` (database + passport setup)
* `models/` (user schema)
* `app.js` (all routes + middleware)
* `server.js` (server start file)


---

## 📂 Frontend Structure

```
frontend/
│── src/
│   ├── components/
│   │   ├── Error.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Profile.js
│   │   └── Register.js
│   │
│   ├── layout/
│   │   └── Header.js
│   │
│   ├── routes/
│   │   └── index.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
```

---

### 📂 `components/Error.js`

```jsx
import React from "react";

const Error = () => {
  return (
    <div>
      <h2>Error Page</h2>
    </div>
  );
};

export default Error;
```

---

### 📂 `components/Home.js`

```jsx
import React from "react";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );
};

export default Home;
```

---

### 📂 `components/Login.js`

```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/profile", {
        headers: { Authorization: token },
      })
      .then(() => navigate("/profile"))
      .catch(() => navigate("/login"));
  }, []);

  const handleLogin = () => {
    axios
      .post("http://localhost:4000/login", { username, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log("User successfully logged in");
        navigate("/profile");
      })
      .catch(() => navigate("/login"));
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
```

---

### 📂 `components/Profile.js`

```jsx
import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/profile", {
        headers: { Authorization: token },
      })
      .then((res) => console.log(res))
      .catch(() => navigate("/login"));
  }, []);

  return (
    <div>
      <h2>Profile Page</h2>
    </div>
  );
};

export default Profile;
```

---

### 📂 `components/Register.js`

```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/profile", {
        headers: { Authorization: token },
      })
      .then(() => navigate("/profile"))
      .catch(() => navigate("/register"));
  }, []);

  const handleRegister = () => {
    axios
      .post("http://localhost:4000/register", { username, password })
      .then(() => {
        console.log("User registered");
        navigate("/login");
      })
      .catch(() => navigate("/register"));
  };

  return (
    <div>
      <h2>Register Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;
```

---

### 📂 `layout/Header.js`

```jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link> &nbsp;
      <Link to="/register">Register</Link> &nbsp;
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Header;
```

---

### 📂 `routes/index.js`

```jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Error from "../components/Error";
import Header from "../layout/Header";

const Index = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
```

---

### 📂 `App.js`

```jsx
import React from "react";
import "./App.css";
import Index from "./routes";

const App = () => {
  return (
    <div className="App">
      <Index />
    </div>
  );
};

export default App;
```

---

### 📂 `index.js`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
```

---

✅ Now your **frontend is structured** with:

* `components/` → Pages (Home, Login, Register, Profile, Error)
* `layout/` → Reusable UI (Header)
* `routes/` → Routing setup
* `App.js` & `index.js` → Root files
