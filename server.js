// Package for mongodb
const mongoose = require("mongoose");
// Package for server
const express = require("express");
// CORS = Cross Origin Resource Sharing
const cors = require("cors");
// Initializing server
const app = express();
// Because we need to parse and send the data in json format
app.use(express.json());
// app.use(anything) anything => Middleware
// Importing Model
const User = require("./schema");
app.use(cors());
// Allows requests from all addresses
// REST API REST => Representational State Transfer
// GET Request
// function(int param1, function param2 ) param2 => callback
// Callback function is called after a particular set of operations has finished
// Normal function syntax in javascript
// function name(parameters) {function body}
// Arrow function, also known as anonymous functions => cuz name is optional
// const function name = (parameters) => {function body}
// name is optional, parameters also optional , brackets optional only when there is a single statement

mongoose.connect(
    "mongodb+srv://ishaqueali996:incorrect@smitweaver.ih5ci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);

    // If username and password are correct
    // Query the database
    // If no data is found => invalid username/pwd or the user doesn't exist
    User.findOne({ username, password }, (err, user) => {
        if (err) {
            res.statusCode = 400;
            res.send({ error: true, message: "MongoDB error" });
            return;
        } else if (user) {
            res.statusCode = 200;
            res.send({ error: false, message: "Login successful" });
        } else {
            res.statusCode = 201;
            res.send({ error: false, message: "Invalid username/pwd" });
        }
    });
});
// Sign up API
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    console.log(username, password, email);
    // Create a new user in MongoDB
    const user = new User({
        username,
        email,
        password,
    });
    // Save this user to the db
    user.save().then(() => console.log("User created!"));
});

app.listen(3000);
