var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://<MQTT-BROKER>')

client.on('connect', function() {
    console.log('connected!')
    client.subscribe('test')
})

client.on('message', function(topic, message) {
    console.log(topic.toString() + ' => ' + message.toString())
})