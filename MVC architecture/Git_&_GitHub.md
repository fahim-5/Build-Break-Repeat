<p align="center">
  <strong>Fahim Faysal</strong><br>
  <sub>20-08-2025</sub>
</p>

----
<br>

## 📂 Full MVC File Structure (Node.js + Express)

```
project-root/
│── package.json
│── .env
│── .gitignore
│── server.js              # Entry point
│
├── config/
│   ├── db.js              # Database connection (MongoDB/MySQL etc.)
│   ├── passport.js        # Passport strategies (if using authentication)
│   └── logger.js          # Logger config (optional, winston/morgan)
│
├── src/
│   ├── controllers/       # Handle requests, call services/models
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   └── post.controller.js
│   │
│   ├── models/            # Database schemas / ORM models
│   │   ├── user.model.js
│   │   └── post.model.js
│   │
│   ├── routes/            # Routes map (API endpoints)
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   └── post.routes.js
│   │
│   ├── services/          # Business logic (between controller & model)
│   │   ├── auth.service.js
│   │   ├── user.service.js
│   │   └── post.service.js
│   │
│   ├── middlewares/       # Auth, validation, error handling
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   └── validation.middleware.js
│   │
│   ├── utils/             # Helper functions (tokens, email, etc.)
│   │   ├── jwt.utils.js
│   │   ├── email.utils.js
│   │   └── response.utils.js
│   │
│   ├── validations/       # Joi/Yup validation schemas
│   │   ├── auth.validation.js
│   │   └── user.validation.js
│   │
│   └── app.js             # Express app config (middleware, routes, etc.)
│
├── tests/                 # Unit & integration tests
│   ├── auth.test.js
│   └── user.test.js
│
└── public/                # Static assets (images, css, js if serving frontend)
    └── uploads/           # File uploads (if any)
```

---

## ⚡ Explanation of Folders

* **server.js** → Starts the server, loads `app.js`.
* **config/** → Database config, passport strategies, logger.
* **controllers/** → Handle **incoming requests** and call services.
* **models/** → Define schemas (MongoDB Mongoose) or ORM models (Sequelize).
* **routes/** → Define API endpoints (e.g., `/api/users`, `/api/auth`).
* **services/** → Core business logic (e.g., user registration, hashing).
* **middlewares/** → Authentication, error handling, validation middleware.
* **utils/** → Helper functions like JWT generator, email sender.
* **validations/** → Joi or Yup validation schemas for requests.
* **tests/** → Unit & integration tests with Jest/Mocha.
* **public/** → Static files like uploads, frontend assets.

---

Let see an example 

---

## 📂 Final File Structure

```
project-root/
│── server.js
│── package.json
│── .gitignore
│
├── controllers/
│   ├── users.controller.js
│   └── products.controller.js
│
├── models/
│   ├── users.model.js
│   └── products.model.js
│
├── routes/
│   ├── users.route.js
│   └── products.route.js
│
├── views/
│   ├── index.html
│   └── product.html
```

---

## 📄 File Contents

### **server.js**

```js
const express = require("express");

const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");

const app = express();
const PORT = 3000;

// middleware
app.use(express.urlencoded({ extended: true }));

// routes
app.use(userRouter);
app.use(productRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    message: "Resource not found",
  });
});

// start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
```

---

### **controllers/users.controller.js**

```js
const path = require("path");
const users = require("../models/users.model");

exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

exports.saveUser = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);

  const user = { name, age };
  users.push(user);

  res.status(201).json({
    success: true,
    users,
  });
};
```

---

### **controllers/products.controller.js**

```js
const path = require("path");
const products = require("../models/products.model");

exports.getProducts = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/product.html"));
};

exports.saveProduct = (req, res) => {
  const name = req.body.name;
  const price = Number(req.body.price);

  const product = { name, price };
  products.push(product);

  res.status(201).json({
    success: true,
    products,
  });
};
```

---

### **models/users.model.js**

```js
const users = [
  { name: "Anisul Islam", age: 31 },
  { name: "Sufia Begum", age: 47 },
];

module.exports = users;
```

---

### **models/products.model.js**

```js
const products = [
  { name: "Keya Soap", price: 31 },
  { name: "Milk", price: 47 },
];

module.exports = products;
```

---

### **routes/users.route.js**

```js
const express = require("express");
const { getUsers, saveUser } = require("../controllers/users.controller");

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", saveUser);

module.exports = router;
```

---

### **routes/products.route.js**

```js
const express = require("express");
const { getProducts, saveProduct } = require("../controllers/products.controller");

const router = express.Router();

router.get("/products", getProducts);
router.post("/products", saveProduct);

module.exports = router;
```

---

### **views/index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>User</title>
  </head>
  <body>
    <form method="POST" action="/users">
      <input type="text" name="name" placeholder="Enter Name" />
      <input type="number" name="age" placeholder="Enter Age" />
      <button type="submit">Save User</button>
    </form>
  </body>
</html>
```

---

### **views/product.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Product</title>
  </head>
  <body>
    <form method="POST" action="/products">
      <input type="text" name="name" placeholder="Enter Product Name" />
      <input type="number" name="price" placeholder="Enter Price" />
      <button type="submit">Save Product</button>
    </form>
  </body>
</html>
```

---

👉 Now you have a **complete MVC architecture**:

* `controllers/` → handles request logic
* `models/` → holds data
* `routes/` → maps routes to controllers
* `views/` → simple HTML forms
* `server.js` → app entry

