const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
//const bcrypt = require("bcryptjs");
//const config = require("config");
//const jwt = require("jsonwebtoken");
const User = require("../../models/Users");

router.get('/',async (req, res) => {
  const userId = req.query.userId
  try {
    const user = await User.findOne({userId})
  
        res.json(user.userName)
    
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("server error");
  }
  

 });
router.post(
  "/",
  // [
  //   check("lastName", "Please enter your last name")
  //     .not()
  //     .isEmpty(),
  //   check("firstName", "Please enter your first name")
  //     .not()
  //     .isEmpty(),
  //   check("email", "Please provide a valid email address").isEmail(),
  //   check("userId", "Please login").isLength({
  //     min: 6
  //   }),
  //   check("userName", "Please provide a username")
  //     .not()
  //     .isEmpty()
  //// ],
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    const {
      lastName,
      firstName,
      userName,
      email,
      userId,
      phoneNum,
      service
    } = req.body;

    try {
      let user = await User.findOne({ userId });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      user = new User({
        firstName,
        lastName,
        email,
        userName,
        userId,
        service,
        phoneNum
      });

      //   const salt = await bcrypt.genSalt(10);
      //   user.password = await bcrypt.hash(password, salt);

      await user.save();
      res.status(201).json(user)

      //   const payload = {
      //     user: {
      //       id: user.id
      //     }
      //   };

      //   jwt.sign(
      //     payload,
      //     config.get("jwtSecret"),
      //     { expiresIn: 360000 },
      //     (err, token) => {
      //       if (err) throw err;
      //       res.json({ token });
      //     }
      //   );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

router.patch('/:userId', async (req,res) =>{

  try{
    const user = await User.findOne({userId: req.params.userId});
    if(req.body.userName) {
    user.userName = req.body.userName
  }
  await user.save()
  res.send(user.userName)
}catch{
  res.status(404)
  res.send({error: "User Not Found"})
}


})

module.exports = router;
