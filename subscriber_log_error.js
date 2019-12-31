var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://<MQTT-BROKER>')

client.on('connect', function() {
    console.log("connected!");
    client.subscribe('test', function(err) {
        if (err) {
            console.log(err);
        }
    });
});