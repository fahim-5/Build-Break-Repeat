const app = require('./app');
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`the server is running at localhost:${PORT}`);
})

app.routes.user.get('/hello', (req, res) => {
  res.send('GET request successful!');
});     

eo