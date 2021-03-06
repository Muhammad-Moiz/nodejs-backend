const express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
const Items = mongoose.model("Items");

router.get("/", (req, res) => {
  try {
    Items.find((err, docs) => {
      if (!err) {
        res.json(docs);
      } else {
        res.status(err.status || 500);
        res.json({
          message: err.message,
          error: err,
        });
      }
    });
  } catch (err) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  }
});

router.get("/markDone/:id", (req, res) => {
  console.log(req.params.id)
  try {
    Items.update(
      {
        "_id":req.params.id
      },
      {
        $set :
        {
           "status" : true
        }
      })
      .then((doc)=>{
        console.log("success")
        res.send("updated");
      })
      .catch((err)=>{
        res.status(err.status || 500);
        res.json({
          message: err.message,
          error: err,
        });
      });
  } catch (e) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  }
});

router.get("/delete/:id", (req, res) => {
  try {
    Items.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) {
        res.send("deleted");
      } else {
        console.log("Error in item :" + err);
      }
    });
  } catch (err) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  }
});

router.post("/insert", (req, res) => {
  try {
    var item = new Items();
    item.task = req.body.task;
    item.status = false;

    item.save((err, doc) => {
      if (!err) {
        console.log("success", doc);
        res.json(doc);
      } else {
        res.status(err.status || 500);
        res.json({
          message: err.message,
          error: err,
        });
      }
    });
  } catch (err) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  }
});

module.exports = router;
