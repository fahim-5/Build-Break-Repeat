<p align="center">
  <strong>Fahim Faysal</strong><br>
  <sub>14-08-2025</sub>
</p>



# **Passport-jwt**


<br>
<br>

## **Passport JWT Authentication**

**Passport JWT Authentication** – An authentication method using **Passport.js** and the **JWT (JSON Web Token) strategy** to securely verify users in a **stateless** way.

* **Definition:** After a user logs in, the server generates a signed JWT containing user data. The client stores it and sends it with each request.
* **How it works:**

  1. User logs in → server verifies credentials → generates JWT.
  2. Client stores JWT (e.g., HTTP-only cookie or local storage).
  3. Each request → JWT is sent in the `Authorization` header as `Bearer <token>`.
  4. Server verifies token → grants access if valid.
* **Key points:**

  * No server-side session storage needed.
  * Ideal for APIs & microservices.
  * Must handle token expiry & refresh securely.
