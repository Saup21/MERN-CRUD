const express = require('express');
const app = express();
const mongoose = require('mongoose')

// DATABASE CONNECTION
mongoose.connect('mongodb://localhost:27017/mern-crud?readPreference=primary&appname=MongoDB%20Compass&ssl=false', { useNewUrlParser: true });


app.listen(3001, () => {
    console.log("You are connected");
});