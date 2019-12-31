var mqtt = require('mqtt');

const MQTT_SERVER = "SERVER_ADDRESS";
const MQTT_PORT = "PORT";
const MQTT_USER = "";
const MQTT_PASSWORD = "";

var client = mqtt.connect({
    host: MQTT_SERVER,
    port: MQTT_PORT,
    username: MQTT_USER,
    password: MQTT_PASSWORD
});