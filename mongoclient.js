var mongodb = require("mongodb");

var client = mongodb.MongoClient;
var url = "mongodb://host:port/";

client.connect(url, function (err, client) {
    
    var db = client.db("Whizbase");
    var collection = db.collection("bathrooms");
    
    var options = {
        allowDiskUse: false
    };
    
    var pipeline = [
        {
            "$geoNear": {
                "near": {
                    "type": "Point",
                    "coordinates": [
                        -118.243683,
                        34.052235
                    ]
                },
                "distanceField": "dist.calculated",
                "maxDistance": 40000.0,
                "spherical": true,
                "distanceMultiplier": 1/1609.344
            }
        }
    ];
    
    var cursor = collection.aggregate(pipeline, options);
    
    cursor.forEach(
        function(doc) {
            console.log(doc);
        }, 
        function(err) {
            client.close();
        }
    );
    
    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
    
});