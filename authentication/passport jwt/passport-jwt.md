<p align="center">
  <strong>Fahim Faysal</strong><br>
  <sub>14-08-2025</sub>
</p>



# **Passport-jwt**


<br>
<br>

## **Passport JWT Authentication**


## **Passport JWT Authentication – Beginner Version**

A way to log users in using **Passport.js** and **JWT (JSON Web Token)**, where the server doesn’t have to remember anything about you — instead, you carry your proof (the token) with you.

---

### **What it is**

When you log in, the server gives you a **token** (like a digital ID card) that proves who you are. You keep it, and you show it every time you talk to the server.

---

### **How it works (simple steps)**

1. **You log in** → The server checks your username & password.
2. If correct → The server makes a **JWT** (a small text file with your info, locked with a secret key).
3. The server gives the JWT to you → You keep it (in your browser storage or cookie).
4. Next time you ask the server for something → You send the JWT along.
5. The server checks the JWT → If it’s real & not expired → You get access.

---

### **Why use it?**

* No need for the server to store your session data.
* Works great for APIs, mobile apps, and microservices.
* You just need to protect your token (don’t share it).

---

💡 **Pro Tip:** Always set an **expiry time** for JWTs and use **refresh tokens** to avoid logging in again too often.

