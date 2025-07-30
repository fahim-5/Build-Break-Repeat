const express = require('express');
const multer = require('multer');

const app = express();  

const PORT =  3000;



// file uploader 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() + '-' + file.originalname;
    cb(null, fileName)
  }
})

const upload = multer({ storage: storage })

app.get('/test', (req, res) => {
  res.send('testing api');
});


app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.post('/register',upload.single('image'), (req, res) => {
  res.send('File uploaded successfully');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
