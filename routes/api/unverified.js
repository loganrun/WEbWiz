const express = require("express");
const router = express.Router();
//const { check, validationResult } = require("express-validator");
const Unverified = require("../../models/Unverified");


router.get('/',async (req, res) => {

    try {
      const unverified = await Unverified.aggregate([
          
       {
           "$geoNear": {
               "near": {
                   "type": "Point",
                   "coordinates": [
                     parseFloat(req.query.lng),//lng, //-118.243683,
                     parseFloat(req.query.lat) //lat  //34.052235
                   ]
               },
               "distanceField": "dist.calculated",
               "maxDistance": 40000.0,
               "spherical": true,
               "distanceMultiplier": .00062137119
           }
       }
     ])
   
          
      res.json(unverified)
     
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("server error");
    }
 
 });





module.exports = router;