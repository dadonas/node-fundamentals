var util = require("util");

var EventEmitter = require("events").EventEmitter;

function Resource(maxEvents){
    var self = this;

    process.nextTick(function(){
        var count = 0;
        
        self.emit("start");

        for (var i=0;i<maxEvents;i++){
            self.emit("data",i);
        }

        self.emit("end",maxEvents);
    })
}

util.inherits(Resource, EventEmitter);

module.exports = Resource;