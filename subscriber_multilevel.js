var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://139.180.132.223')

client.on('connect', function() {
    console.log('connected!')
    client.subscribe('test/#') // # multi-level, + single-level
})

client.on('message', function(topic, message) {
    console.log(topic.toString() + ' => ' + message.toString())
})