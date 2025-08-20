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


First of all we need to create a user login and register system with the node wpxress and i have to coneect with database.

then we have to install 
npm i jsonwebtoken

thne we have to import the package
var jwt = require('jsonwebtoken');

then we have to ue this method
jwt.sign(payload, secretOrPrivateKey, [options, callback])

here we have to use expiresIn: method
and we have to set value for the payload

now we have to go passportjs and then pasport-jwt

in the congif file we will create a passport.js file

and we wil past this code:

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
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
}))