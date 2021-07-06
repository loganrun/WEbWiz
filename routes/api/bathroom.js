const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Bathroom = require("../../models/Bathroom");
const config = require("config");
const url = config.get("mongoURI")
const mongodb = require("mongodb");
const { v4: uuidv4 } = require('uuid')
const client = mongodb.MongoClient;


const Id= uuidv4();


router.get('/',async (req, res) => {

   try {
     const bathroom = await Bathroom.aggregate([
      {
          "$geoNear": {
              "near": {
                  "type": "Point",
                  "coordinates": [
                    parseFloat(req.query.lng),//lng, //-118.243683,
                    parseFloat(req.query.lat) //lat  //34.052235
                  ]
              },
              "distanceField": "distance",
              "maxDistance": 16093.0,
              "spherical": true,
              "distanceMultiplier": .00062137119
          }
      }
    ])
  
         
     res.json(bathroom)
    
   } catch (err) {
     console.error(err.message);
     return res.status(500).send("server error");
   }

});

router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("street", "address is required")
      .not()
      .isEmpty(),
    check("city", "Name of City is required")
      .not()
      .isEmpty(),
    check("state", "Name of state is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, street, city, state, directions,latitude,longitude,id,accessible,unisex,icon,ad,logo } = req.body;

    try {
      bathroom = new Bathroom({
        name,
        street,
        city,
        state,
        directions,
        latitude,
        longitude,
        id,
        accessible,
        unisex,
        icon,
        ad,
        logo,
        location: {
          type: "Point",
          coordinates: [longitude, latitude]
        }
      });

      await bathroom.save();

      return res.json(bathroom);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("server error");
    }
  }
);

router.post(
  "/verify",
  // [
  //   check("name", "Name is required")
  //     .not()
  //     .isEmpty(),
  //   check("street", "address is required")
  //     .not()
  //     .isEmpty(),
  //   check("city", "Name of City is required")
  //     .not()
  //     .isEmpty(),
  //   check("state", "Name of state is required")
  //     .not()
  //     .isEmpty()
  // ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, street, city, state, directions,latitude,longitude,accessible,unisex,ad,logo,changing_table,id } = req.body;

    try {
      let verify = await Bathroom.findOne({ id });
      if (verify) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Already verified" }] });
      }
      bathroom = new Bathroom({
        name,
        street,
        city,
        state,
        directions,
        changing_table,
        latitude,
        longitude,
        id:Id,
        accessible,
        unisex,
        ad,
        logo,
        location: {
          type: "Point",
          coordinates: [longitude, latitude]
        },
        Date,
        rating: 5,
        count: 1,
        totalRatings: 0,
        lowerCard: "https://storage.googleapis.com/whizz_pics/lower-card-generic.png",
        verified: "yes"
      });

      await bathroom.save();

      return res.json(bathroom);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("server error");
    }
  }
);

module.exports = router;
