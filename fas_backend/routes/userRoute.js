const express = require("express");
const router = require("express").Router();
const app = express();
const User = require("../models/User");
const cors = require('cors');

app.use(cors()) 

var jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  User.find()
  .then((users)=> {
    res.send(users);
  }) 
  
});

// Please add some APIs for CRUD operations
//get familiar with other middlewares - verifyToken.js file
router.post("/", (req, res) => {
  let userDetails = req.body;
  let newUser = new User({
    email: userDetails.email,
    password: userDetails.password,
    allergen: userDetails.allergen,
  });
  console.log(req)

  newUser.save(function (error) {
    if (error) {
      console.log(error);
      return res.status(400).send("User was not added");
    }
    console.log(`New User ${newUser} was added`);
    return res.status(200).send("User added");
  });
});

router.delete("/:userUid", (req, res) => {
  User.findOneAndRemove(
    { userUid: req.params.userUid },
    function (error, user) {
      if (error) {
        console.log(error);
        return res.status(400).send("User was not deleted");
      }
      if (!user) {
        return res.status(404).send("User could not be found");
      }
      console.log(`User ${user} was deleted`);
    }
  );
});

router.put("/:userUid", (req, res) => {
  User.findOneAndUpdate(
    { userUid: req.params.userUid },
    req.body,
    function (error, user) {
      if (error) {
        console.log(error);
        return res.status(400).send("User was not updated");
      }
      if (!actor) {
        return res.status(404).send("User could not be found");
      }
      console.log(`User ${user} was updated`);
    }
  );
});

// authenticate a user by email and password (token)
// request url: /user/authenticateUser
router.route("/authenticate").post((req, res) => {
  console.log('s',req)
  const email = req.body.email;
  const password = req.body.password;
  console.log("here");
  console.log(email, password);

  User.findOne({ email: email })
    .then((user) => {
      // user exists
      if (user !== null) {
        // console.log(password);
        // console.log(user.password);
        if (password === user.password) {
          
            // generate a token for user
            console.log("verified");
            
            res.header("auth-token", "token").json({
              val: "User logged in successfully",
              email: email,
              allergen: user.allergen
            });
          
          
        } else {
          console.log('not credentials')
          res.json({ val: "Invalid credentials" });
        }
      } else {
        console.log('not exist')
        res.json({ val: "user does not exist" });
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
