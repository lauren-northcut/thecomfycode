const express = require('express');
const path = require('path');
const Router = express.Router();
const app = express();

// Serve the static files from the React app

if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build"));
  }

Router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
    
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log('App is listening on port');