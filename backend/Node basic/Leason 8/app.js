const express = require('express');
const app = express();
const userRouter = require('./user.router');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('views'));


app.use('/api/users', userRouter);


app.use((req,res)=>{
     res.send("this is not a valid routes")
})
module.exports = app;
