const express = require('express');
require('dotenv').config()
const db = require('./config/mongoose');
const port = process.env.PORT || 8080;
const app = express();


// routes
app.use('/', require('./routes'));


app.listen(port,(err) => {
    if(err){
        console.log("error occure during listning to servar"+err);
    }
    console.log("server running on port", port);
})