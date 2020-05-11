const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Bathroom = require("../../models/Bathroom");
const config = require("config");
const url = config.get("mongoURI")
const mongodb = require("mongodb");
const client = mongodb.MongoClient;

router.get('/',async (req, res) => {
  // try {
  //   const bathroom = await Bathroom.find()
  
  //       res.json(bathroom)
    
  // } catch (err) {
  //   console.error(err.message);
  //   return res.status(500).send("server error");
  // }
  client.connect(url, {useNewUrlParser: true},function (err, client) {
    
    const db = client.db("Whizbase");
    const collection = db.collection("bathrooms");
    
    const options = {
        allowDiskUse: false
    };

    const latitude = req.body.params
    const longitude = req.query
    console.log(latitude)
    console.log(longitude)
    
    const pipeline = [
        {
            "$geoNear": {
                "near": {
                    "type": "Point",
                    "coordinates": [
                      longitude,
                      latitude
                    ]
                },
                "distanceField": "dist.calculated",
                "maxDistance": 40000.0,
                "spherical": true,
                "distanceMultiplier": 1/1609.344
            }
        }
    ];
    
    const cursor = collection.aggregate(pipeline, options).toArray(function(err, result) {
      res.send(result);
    }, 
    function(err) {
      console.log(err)
        client.close();
    });
    
    //  cursor.forEach(
    //      function(doc) {
    //          res.send();
        //  }, 
        //  function(err) {
        //      client.close();
        //  }
    //  );
    
    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
    
})

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

    const { name, street, city, state, directions,latitude,longitude,id,accessible,unisex } = req.body;

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

module.exports = router;
