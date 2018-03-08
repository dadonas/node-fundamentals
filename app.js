var Resource = require("./inharitance");

var r = new Resource(10);

r.on("start", function(){
    console.log("I've just started!");
});

r.on("data", function(d){
    console.log("Data received -> " + d);
});

r.on("end", function(d){
    console.log("I've just finished with " + d + " events.");
});