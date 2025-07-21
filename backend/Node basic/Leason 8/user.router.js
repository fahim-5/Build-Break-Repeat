const express = require('express');
const router = express.Router();    

// GET route
// router.get('/hello', (req, res) => {
//   res.send('GET request successful!');
// });

router.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});


// POST route
router.post('/echo', (req, res) => {
  res.send('POST request successful!');
});

// PUT route
router.put('/update/:id', (req, res) => {
  res.send(`PUT request successful for ID ${req.params.id}`);
});

// DELETE route
router.delete('/delete/:id', (req, res) => {
  res.send(`DELETE request successful for ID ${req.params.id}`);
});

// QUERY PARAMETER EXAMPLE
router.get('/search', (req, res) => {
  const { keyword, page } = req.query;
  res.send(`Search results for keyword: "${keyword}", page: ${page}`);
});

module.exports = router;
