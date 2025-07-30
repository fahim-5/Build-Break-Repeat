const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/circle', (req, res) => {
  const radius = parseFloat(req.body.radius);
  const area = Math.PI * radius * radius;
  res.send(`
    <div style="text-align: center; font-family: Arial; margin-top: 100px;">
      <h2 style="color: #1a73e8;">🔵 Area of Circle: ${area.toFixed(2)}</h2>
      <a href="/" style="display: inline-block; margin-top: 20px; padding: 10px 20px; 
         background-color: #1a73e8; color: white; text-decoration: none; border-radius: 5px;">
        Back to Home
      </a>
    </div>
  `);
});

app.post('/rectangle', (req, res) => {
  const height = parseFloat(req.body.height);
  const width = parseFloat(req.body.width);
  const area = height * width;
  res.send(`
    <div style="text-align: center; font-family: Arial; margin-top: 100px;">
      <h2 style="color: #1a73e8;">🟦 Area of Rectangle: ${area.toFixed(2)}</h2>
      <a href="/" style="display: inline-block; margin-top: 20px; padding: 10px 20px; 
         background-color: #1a73e8; color: white; text-decoration: none; border-radius: 5px;">
        Back to Home
      </a>
    </div>
  `);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});