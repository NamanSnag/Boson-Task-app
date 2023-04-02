const express = require('express');
require('dotenv').config()
const db = require('./config/mongoose');
const port = process.env.PORT || 8080;
const app = express();

//middleware
app.use(express.json());

// urlencoded add to extract data from
app.use(express.urlencoded());

// routes
app.use('/', require('./routes'));


app.listen(port,(err) => {
    if(err){
        console.log("error occure during listning to servar"+err);
    }
    console.log("server running on port", port);
})