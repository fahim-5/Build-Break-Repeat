

# 🚀 Beginner-Friendly MVC with Node.js + Express

---

## 📂 File Structure

```
project-root/
│── server.js              # Main entry file
│── package.json
│── .gitignore
│
├── controllers/           # Handles requests
│   ├── users.controller.js
│   └── products.controller.js
│
├── models/                # Stores data (fake DB)
│   ├── users.model.js
│   └── products.model.js
│
├── routes/                # Connects URLs to controllers
│   ├── users.route.js
│   └── products.route.js
│
├── views/                 # Simple HTML forms
│   ├── index.html
│   └── product.html
```

---

## 📄 File Explanations

* **server.js** → Starts the server, loads routes.
* **controllers/** → Functions that decide *what to do* when a request comes.
* **models/** → Store data (here we use arrays instead of real DB).
* **routes/** → Define the URL paths (`/users`, `/products`).
* **views/** → Simple HTML pages with forms.

---

## 📝 File Contents

### 1️⃣ **server.js**

```js
const express = require("express");

const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");

const app = express();
const PORT = 3000;

// middleware to read form data
app.use(express.urlencoded({ extended: true }));

// use routes
app.use(userRouter);
app.use(productRouter);

// 404 error page
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

---

### 2️⃣ **controllers/users.controller.js**

```js
const path = require("path");
const users = require("../models/users.model");

// show the user form
exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

// save a new user
exports.saveUser = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);

  users.push({ name, age });

  res.json({
    success: true,
    users,
  });
};
```

---

### 3️⃣ **controllers/products.controller.js**

```js
const path = require("path");
const products = require("../models/products.model");

// show the product form
exports.getProducts = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/product.html"));
};

// save a new product
exports.saveProduct = (req, res) => {
  const name = req.body.name;
  const price = Number(req.body.price);

  products.push({ name, price });

  res.json({
    success: true,
    products,
  });
};
```

---

### 4️⃣ **models/users.model.js**

```js
// fake user database
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

module.exports = users;
```

---

### 5️⃣ **models/products.model.js**

```js
// fake product database
const products = [
  { name: "Soap", price: 40 },
  { name: "Milk", price: 60 },
];

module.exports = products;
```

---

### 6️⃣ **routes/users.route.js**

```js
const express = require("express");
const { getUsers, saveUser } = require("../controllers/users.controller");

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", saveUser);

module.exports = router;
```

---

### 7️⃣ **routes/products.route.js**

```js
const express = require("express");
const { getProducts, saveProduct } = require("../controllers/products.controller");

const router = express.Router();

router.get("/products", getProducts);
router.post("/products", saveProduct);

module.exports = router;
```

---

### 8️⃣ **views/index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>User Form</title>
  </head>
  <body>
    <h2>Add a User</h2>
    <form method="POST" action="/users">
      <input type="text" name="name" placeholder="Enter Name" required />
      <input type="number" name="age" placeholder="Enter Age" required />
      <button type="submit">Save User</button>
    </form>
  </body>
</html>
```

---

### 9️⃣ **views/product.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Product Form</title>
  </head>
  <body>
    <h2>Add a Product</h2>
    <form method="POST" action="/products">
      <input type="text" name="name" placeholder="Enter Product Name" required />
      <input type="number" name="price" placeholder="Enter Price" required />
      <button type="submit">Save Product</button>
    </form>
  </body>
</html>
```

---

## 🎯 How it Works (Step by Step)

1. Open browser → go to `http://localhost:3000/users`
   → Shows **User Form**.
   Fill form → click submit → new user added in memory.

2. Open browser → go to `http://localhost:3000/products`
   → Shows **Product Form**.
   Fill form → click submit → new product added in memory.

---
