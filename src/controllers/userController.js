const express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
const Users = mongoose.model("Users");

router.post("/login", (req, res) => {
  try {
    var email = req.body.email;
    var password = req.body.password;
    Users.findOne({ email: email }, (err, doc) => {
      if (!err) {
        if (doc) {
          console.log(doc.password);
          if (password == doc.password) {
            return res.json("Successfully login");
          } else {
            res.status(500);
            return res.json("login failed");
          }
        } else {
          res.status(500);
          return res.json("email not exist");
        }
      } else if (err) {
        console.log("error in");
        res.status(err.status || 500);
        return res.json({
          message: err.message,
          error: err,
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
