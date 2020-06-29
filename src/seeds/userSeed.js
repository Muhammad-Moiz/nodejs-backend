const mongoose = require("mongoose");
const User = mongoose.model("Users");

function userSeed() {
    var user = new User();
    user.fullName = "Muhammad Moiz";
    user.email = "moiz@gmail.com";
    user.password = "12345678";
    
    user.save();
}

module.exports = userSeed;
