const mongoose = require("mongoose");

const schema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

// Creating a model => basically a collection in MongoDB
module.exports = mongoose.models.User || mongoose.model("User", schema, "User");

