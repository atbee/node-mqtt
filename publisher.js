var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://<MQTT-BROKER>')

client.on('connect', function() {
    console.log('connected!')

    client.publish('test', 'hello!')
    client.end()
})