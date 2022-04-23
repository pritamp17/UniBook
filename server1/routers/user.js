const express = require("express");
const user = express.Router();
const User = require("../Models/User");
const mongoose = require("mongoose");

user.get("/:id", (req, res) => {
  var ObjectId = mongoose.Types.ObjectId;
  User.findById(new ObjectId(req.params.id), (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = user;
