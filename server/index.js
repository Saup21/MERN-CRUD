const express = require('express');
const app = express();
const mongoose = require('mongoose')
const FriendModel = require('./models/Friends')

// DATABASE CONNECTION
mongoose.connect('mongodb://localhost:27017/mern-crud?readPreference=primary&appname=MongoDB%20Compass&ssl=false', { useNewUrlParser: true });

app.get('/insert', async (req, res) => {
    const friend = new FriendModel({ name: "Dwight", age: 35 });
    await friend.save()
    res.send(`${friend.name}'s data inserted`)
});

app.get('/friends', (req, res) => {
    FriendModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log("You are connected");
});