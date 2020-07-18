const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// server-start logic
async function startServer() {    
  app.listen(port, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your server is ready and is serving React ! \nPORT set to ${port} !`);
  });
}

// manage CORS
app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve react
app.use('/', express.static('./client/dist'));

// allow react-router to control endpoints
app.get('*', (req, res) => {                       
  res.sendFile(path.resolve(__dirname, '../client/dist/', 'index.html'));                               
});


// launch it (or comment it)
startServer();