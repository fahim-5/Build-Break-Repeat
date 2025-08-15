<p align="center">
  <strong>Fahim Faysal</strong><br>
  <sub>12-08-2025</sub>
</p>



## Authentication

- session vs token based authentication theory
- Cookie 
- Passport local strategy session base


---

<br>
<br>

# **Session vs token based authentication**


<br>



## **1. Session-Based Authentication**

* **How it works:**

  1. User logs in → Server verifies credentials.
  2. Server creates a **session** in its database/memory (storing user ID, roles, etc.).
  3. Server sends a **session ID** (usually via a cookie) to the browser.
  4. On each request, the browser automatically sends that cookie → server looks up the session in memory → verifies the user.

* **Key Points:**

  * **Stateful** → server must store session data.
  * Works well for **web apps** where server memory can handle it.
  * If server restarts, sessions can be lost unless stored in DB/Redis.
  * Scaling requires **session sharing** across servers (sticky sessions or centralized storage).



## **2. Token-Based Authentication**

* **How it works:**

  1. User logs in → Server verifies credentials.
  2. Server generates a **token** (e.g., JWT) containing user data & signature.
  3. Token is sent to the client (usually stored in localStorage or cookies).
  4. On each request, client sends token in the ***Authorization*** header → server **validates the token** without looking up session storage.

* **Key Points:**

  * **Stateless** → server does **not** store authentication info.
  * Ideal for **distributed systems** & **APIs**.
  * Scaling is easier (no shared session store needed).
  * If token is stolen, attacker can use it until it expires (unless you implement revocation).



### **Quick Table:**

| Feature       | Session-Based        | Token-Based                      |
| ------------- | -------------------- | -------------------------------- |
| Storage       | On server            | On client                        |
| Server State  | Stateful             | Stateless                        |
| Scalability   | Harder               | Easier                           |
| Common Format | Session ID (random)  | JWT or similar                   |
| Best For      | Traditional web apps | APIs, mobile apps, microservices |



 **Pro Tip:**

* Use **sessions** for classic server-rendered apps with few servers.
* Use **tokens** for modern, scalable, API-driven architectures.

---

# **Cookies**


<br>

## **1. What is a Cookie?**

A **cookie** is a small piece of data that a server sends to the browser, which the browser stores and sends back with every request to the same server.
They’re mostly used for:

* **Authentication** (storing session IDs or JWTs)
* **User preferences** (theme, language)
* **Tracking** (analytics, ads)

---

## **2. Cookie Lifecycle**

1. **Server sets it**

   * In an HTTP response header:

     ```
     Set-Cookie: sessionId=abc123; Path=/; HttpOnly
     ```
   * Or via JavaScript:

     ```js
     document.cookie = "theme=dark";
     ```
2. **Browser stores it** (in memory or on disk)
3. **Browser sends it back** automatically in every request to matching domain/path:

   ```
   Cookie: sessionId=abc123; theme=dark
   ```



## **3. Cookie Properties**

Cookies have **flags** that control their behavior:

| Property              | Purpose                                                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Name=Value**        | The actual data stored.                                                                                                                                       |
| **Domain**            | Which domain can access it.                                                                                                                                   |
| **Path**              | URL path where the cookie is valid.                                                                                                                           |
| **Expires / Max-Age** | Lifetime (persistent or session).                                                                                                                             |
| **HttpOnly**          | Blocks JavaScript access → prevents XSS theft.                                                                                                                |
| **Secure**            | Sends only over HTTPS.                                                                                                                                        |
| **SameSite**          | Controls cross-site requests: <br> - ***Strict***→ only same site <br> - ***Lax*** → some cross-site allowed <br> - ***None*** → cross-site allowed, must have ***Secure***. |

---

## **4. Types of Cookies**

1. **Session Cookie** – stored in memory, deleted when browser closes.
2. **Persistent Cookie** – stored on disk, survives browser restarts (until ***Expires`/`Max-Age***).
3. **First-party Cookie** – set by the site you’re visiting.
4. **Third-party Cookie** – set by another domain (ads, tracking).
5. **HttpOnly Cookie** – only accessible by the server.
6. **Secure Cookie** – only sent over HTTPS.


## **5. Cookies vs LocalStorage/SessionStorage**

| Feature                 | Cookies             | LocalStorage | SessionStorage   |
| ----------------------- | ------------------- | ------------ | ---------------- |
| Sent with every request | ✅                   | ❌            | ❌                |
| Storage limit           | \~4KB               | \~5–10MB     | \~5–10MB         |
| Expiry                  | Custom              | Manual       | Until tab closes |
| Accessible by JS        | ✅ (unless HttpOnly) | ✅            | ✅                |



## **6. Security Concerns**

* **XSS (Cross-Site Scripting)** → attacker steals cookies via JS.
  ✅ Fix: Use ***HttpOnly*** and sanitize input.
* **CSRF (Cross-Site Request Forgery)** → attacker tricks browser into sending cookies to server.
  ✅ Fix: Use ***SameSite*** and CSRF tokens.
* **Session Hijacking** → cookie theft from insecure networks.
  ✅ Fix: Use ***Secure*** and HTTPS.



## **7. Pro Dev Tips**

* For **auth**, store **session IDs or JWTs** in **HttpOnly, Secure cookies** instead of ***localStorage*** (safer from XSS).
* Set ***SameSite=Lax*** or ***Strict*** to prevent CSRF.
* Avoid **third-party cookies** unless absolutely needed (many browsers block them now).
* Keep cookie data **small** (4KB max) — store large data server-side.

---
Here’s your text rewritten cleanly, fixed typos, and formatted properly:

---

<br>
<br>

# **Passport Local Strategy (Session-Based)**

<br>

## Create and Set Session

---

**1. Passport-local**

* A **Passport.js strategy** for authenticating with a username and password (local auth, no OAuth).
* Used for login/signup logic without external providers.

**2. express-session**

* Middleware that creates and manages **server-side sessions** for storing user data (like logged-in status).
* Works by sending a session ID cookie to the client.

---

## How to Use Them Together (Short Gist)

### 1. Install packages [3 packages]

```bash
npm install passport passport-local express-session connect-mongo
```

---

### 2. Import packages

```js
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const MongoStore = require("connect-mongo");
```

---

### 3. Configure ***express-session***

```js
app.set('trust proxy', 1); // trust first proxy

app.use(session({
  secret: 'keyboard cat',  // Change this to a strong secret
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGOURL, // MongoDB connection URL
    collectionName: "sessions"      // Collection name in MongoDB
  })
  // cookie: { secure: true } // Uncomment if using HTTPS
}));
```

---

✅ **Notes:**

* ***connect-mongo*** is the session store for MongoDB.
* ***mongoUrl*** should be set in your ***.env*** file. Example:

  ```
  MONGOURL=mongodb://localhost:27017/mydatabase
  ```
* Make sure to use ***cookie: { secure: true }*** only if your app runs on HTTPS.

---




## **Setting Up Passport Local Strategy**


### 1. Install required packages

```bash
npm install passport passport-local bcrypt
```

### 2. Initialize Passport in your Express app

Before using ***passport-local***, you must initialize Passport and enable session support:

```js
app.use(passport.initialize());
app.use(passport.session());
```

---

### 3. Create a separate ***passport.js*** configuration file in the config folder

In this file, you will:

* Import ***passport*** and ***passport-local***
* Import your **User** model
* Import **bcrypt** for password hashing

```js
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("./models/User"); // Your User model
```

---

### 4. Configure the Local Strategy

The default ***LocalStrategy*** from Passport docs:

```js
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

**Modified version with async/await & bcrypt:**

```js
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: "Incorrect password" });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);
```

---

### 5. Serialize & Deserialize User

These functions handle how user data is stored in and retrieved from the session.

```js
// Create session ID from user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Find user from session ID
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});
```

---

✅ **Summary:**

1. Initialize Passport in your Express app.
2. Create a ***passport.js*** file with your strategy and serialize/deserialize functions.
3. Use ***bcrypt*** to compare hashed passwords.
4. Store the session in MongoDB with ***connect-mongo*** for persistence.

---

<br>
<br>

# **Login Users**

<br>

We can copy this code from the **Passport-local** documentation:

```js
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });
```

---

### **Modified Version with profile routes**

```js
// Login: POST
app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/profile",
  })
);
```

---

✅ **Tip:**

* ***failureRedirect*** → Redirects if authentication fails.
* ***successRedirect*** → Redirects if authentication succeeds.
* You can also add ***{ failureFlash: true }*** if using ***connect-flash*** for error messages.

<br>
<br>

# **Protecting the Profile Route**

<br>


To make sure only authenticated users can access the profile route, we add a middleware check before rendering:



* Create the ***checkAuthenticated*** middleware like this:

```js
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}
```
Now we can use this

```js
// Profile protected route
app.get("/profile", checkAuthenticated, (req, res) => {
  res.render("profile");
});
```

✅ Now, only logged-in users can access ***/profile***.



Before showing the login page, we can check if the user is already logged in:

```js
// this is a middilewere
const checkLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/profile");
  }
  next();
};
```
Now we can use this

```js
// Login: GET
app.get("/login", checkLoggedIn, (req, res) => {
  res.render("login");
});
```


---





# **Logging Out Users**

For logging out, we can use ***req.logout()*** provided by Passport:

```js
// Logout route
app.get("/logout", (req, res, next) => {
  try {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
```


---

## **Summary**

* **Session-Based**:

  * Server stores user data in memory/DB → sends session ID in cookie.
  * Stateful → needs shared storage if scaling.
  * Best for server-rendered apps.
* **Token-Based**:

  * Server sends signed token (e.g., JWT) to client.
  * Stateless → no server storage needed.
  * Best for APIs, mobile, distributed systems.

---

## **2. Cookies**

* Small data stored in browser → sent with each request.
* Used for auth, preferences, tracking.
* Properties: Name=Value, Domain, Path, Expiry, HttpOnly, Secure, SameSite.
* Types: Session, Persistent, First/Third-party, HttpOnly, Secure.
* **Security**: Use HttpOnly, Secure, SameSite; protect from XSS & CSRF.
* Auth best practice: Store tokens/session IDs in HttpOnly Secure cookies.

---

## **3. Passport Local Strategy (Session-Based Auth)**

* **passport-local**: username/password login.
* **express-session**: manages server-side sessions.
* **connect-mongo**: stores sessions in MongoDB for persistence.

**Setup steps:**

1. Install packages: ***passport***, ***passport-local***, ***express-session***, ***connect-mongo***, ***bcrypt***.
2. Configure ***express-session*** with secret & MongoStore.
3. Initialize passport & session middleware.
4. Create ***passport.js***:

   * Define LocalStrategy (check user & compare password with bcrypt).
   * Serialize/deserialize user.
5. Login route: ***passport.authenticate('local', { failureRedirect, successRedirect })***.
6. Protect routes with ***checkAuthenticated*** middleware.
7. Redirect logged-in users from login page with ***checkLoggedIn***.
8. Logout with ***req.logout()***.

---


---

> For full source code, detailed examples, and additional resources, please visit the official GitHub repository:
> [anisul-Islam/web-authentication](https://github.com/anisul-Islam/web-authentication)

---




<p align="center">
  <strong>Thank you</strong><br>
</p>

