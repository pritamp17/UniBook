const express = require("express");
const login = express.Router();
const passport = require("passport");
const User = require("../Models/User");

login.post("/user", (req, res, next) => {
    passport.authenticate("doctor", { failureRedirect: "/", failureFlash: "Invalid username or password.", successFlash: true }, async (err, user, info) => {
      try {
        console.log(req.body);
        if (err) {  
          return next(err);
        }
        if (!user) {
          res.status(404).send(new Error("User is not correct"));
        }
        const doctor = await User.findOne({ email: user.email });
        if (doctor) {
          req.logIn(user, (err) => {
            if (err) {
              return next(err);
            }
            console.log(doctor);
            res.status(200).send(doctor);
          });
        } else {
          res.status(404).send(new Error("login in server1"));
        }
      } catch (err) {
        return res.status(404).send(err);
      }
    })(req, res, next);
  });

  module.exports = login;