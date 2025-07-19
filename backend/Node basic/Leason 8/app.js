const express = require('express');
const app = express();
const userRouter = require('./user.router');


app.use('/api/users', userRouter);


app.use((req,res)=>{
     res.send("this is not a valid routes")
})
module.exports = app;
