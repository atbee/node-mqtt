var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://<MQTT-BROKER>')

client.on('connect', function() {
    console.log('connected!')

    setInterval(() => {
        client.publish('test', 'hello!')
    }, 1000); // 1000 milliseconds = 1 second
})