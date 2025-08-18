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
