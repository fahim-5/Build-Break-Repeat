const express= require('express');
const cros = require('cors');
const bodyParser = require('body-parser');
const users = require('./models/users.model'); 

const app = express();
app.use(cros());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
const userRoutes = require('./routes/users.route');



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.use("/users", userRoutes);


app.use((req, res) => {
    res.status(404).json({ error: 'Page not found' });
});

app.use((err, req, res) => {
    res.status(500).json({ error: 'Internal Server Error', message: err.message });
});


// Export the app for testing purposes
module.exports = app;   