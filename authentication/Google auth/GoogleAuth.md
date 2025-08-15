<p align="center">
  <strong>Fahim Faysal</strong><br>
  <sub>13-08-2025</sub>
</p>



# Authentication 2

* Passport Google OAuth20 session


---

<br> 
<br>

# **Google OAuth 2.0 with Passport.js**

We can find `OAuth20` in the **Passport.js library** documentation by searching for **passport-google-oauth20**.

With Google OAuth, we don’t need to store a password in the `User` model.
Instead, we store the **Google ID** returned by Google during authentication.

---

## **1. Update User Model**

Example user model with `googleId` instead of `password`:

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  googleId: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
```

---

## **2. Update Login Form**

Add a Google login button in your login page:

```html
<a href="/auth/google">Login with Google</a>
```

---

## **3. Install Required Package**

```bash
npm install passport-google-oauth20
```

---

## **4. Get Google OAuth Credentials**

The **passport-google-oauth20** package documentation contains a link to the
**Google Developers Console** — this is where you get your **Client ID** and **Client Secret**.

**Steps to get credentials:**

1. **Go to Google Developers Console**
   [https://console.cloud.google.com/](https://console.cloud.google.com/)

2. **Sign in** with your Google account.

3. **Create a New Project**

   * Click **New Project**
   * Give it a **name**
   * Click **Create**

4. **Select the Project** you just created.

5. **Set up OAuth Consent Screen**

   * Go to **OAuth Consent Screen**
   * **User Type** → Select **External**
   * Click **Create**
   * Fill in:

     * **App Name**
     * **User Support Email**
     * **Developer Contact Email**
   * Click **Save and Continue**

6. **Skip** the **Scopes** and **Test Users** for now → Click **Save and Continue** until done.

7. **Create Credentials**

   * Go to **Credentials** → **Create Credentials** → **OAuth Client ID**
   * **Application type** → Select **Web application**
   * Add your **Authorized redirect URIs** (e.g., `http://localhost:3000/auth/google/callback`)
   * Click **Create**

8. **Copy** your:

   * **Client ID**
   * **Client Secret**



## **2. Passport.js Google Strategy Setup**

Create a file: `config/passport.js`

```javascript
require("dotenv").config();
const User = require("../models/user.model");
const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOne({ googleId: profile.id }, (err, user) => {
        if (err) return cb(err, null);

        // If user doesn't exist → create new user
        if (!user) {
          let newUser = new User({
            googleId: profile.id,
            username: profile.displayName,
          });
          newUser.save();
          return cb(null, newUser);
        } else {
          // If user exists → return user
          return cb(null, user);
        }
      });
    }
  )
);

// Create session ID when user logs in
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Retrieve user from session ID
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

## **3. app.js Setup**

Since registration happens automatically when logging in with Google,
we **don’t need** a `/register` route.

Add these routes for Google login:

```javascript
// Step 1 — Start Google Authentication
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

// Step 2 — Google Callback URL
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "/profile", // Redirect after successful login
  })
);
```

---

## **4. Flow Summary**

1. User clicks **"Login with Google"**.
2. Redirects to Google for login.
3. Google sends the user back to `/auth/google/callback` with their profile data.
4. Passport:

   * Checks if the user exists in DB.
   * If not, creates a new one.
   * Saves session.
5. User is redirected to `/profile`.

---

## **5. Reference**

For complete example code, check:
[https://github.com/anisul-Islam/web-authentication](https://github.com/anisul-Islam/web-authentication)

---

<p align="center">
  <strong>Thank You</strong><br>
</p>

