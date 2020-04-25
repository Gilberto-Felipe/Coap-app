let coap = require('coap');

let server = coap.createServer();

let humidityState = 'undefine'
let lightState = 'undefine'
let temperatureState = 'undefine'

let humidity = false
let light = false
let temperature = false

server.listen(() => {
  console.log("Server is on!")
})

server.on('request', (req, res) => {

  res.setOption("Content-Format", "application/json");

  let URL = req.url
  let payload = req.payload.toString()
  let valores = ""

  if (payload != "" && payload != null && payload != undefined) {
    valores = JSON.parse(payload)
  }

  switch (req.method) {

    case 'GET':

      if (URL === '/sensores/humidity') {
        if (humidity) {
          res.end(JSON.stringify({ estado: `Humidity: ${humidityState}%` }))
        } else {
          res.end(JSON.stringify({ estado: 'Humidity sensor is OFF.' }))
        }
      }

      else if (URL === '/sensores/light') {
        if (light) {
          res.end(JSON.stringify({ estado: `Light: ${lightState}%` }))
        } else {
          res.end(JSON.stringify({ estado: 'Light sensor is OFF.' }))
        }
      }

      else if (URL === '/sensores/temperature') {
        if (temperature) {
          res.end(JSON.stringify({ estado: `Temperature: ${temperatureState}%` }))
        } else {
          res.end(JSON.stringify({ estado: 'Temperature sensor is OFF.' }))
        }
      }

      break;

    case 'POST':

      if (URL === '/sensores/humidity') {
        humidity = valores.activar
        console.log("Humidity sensor is ON.")
        res.end(JSON.stringify({ estado: "Now humidity sensor is ON." }))
      }

      else if (URL === '/sensores/light') {
        light = valores.activar
        console.log("Light sensor is ON.")
        res.end(JSON.stringify({ estado: "Now light sensor is ON." }))
      }

      else if (URL === '/sensores/temperature') {
        temperature = valores.activar
        console.log("Temperature sensor is ON.")
        res.end(JSON.stringify({ estado: "Now temperature sensor is ON." }))
      }

      break;

    case 'PUT':

      if (URL == '/sensores/humidity') {
        if (humidity) {
            humidityState = valores.value
            console.log(`New Humidity: ${humidityState}%`)
            res.end(JSON.stringify({ estado: 'Humidity state was UPDATED.' }))
        }
        else {
            res.end(JSON.stringify({ estado: 'Humidity sensor is OFF.' }))
        }
      }

      else if (URL == '/sensores/light') {
        if (light) {
            lightState = valores.value
            console.log(`New light: ${lightState}%`)
            res.end(JSON.stringify({ estado: 'Light state was UPDATED.' }))
        }
        else {
            res.end(JSON.stringify({ estado: 'Light sensor is OFF.' }))
        }
      }

      else if (URL == '/sensores/temperature') {
        if (temperature) {
            temperatureState = valores.value
            console.log(`New temperature: ${temperatureState}%`)
            res.end(JSON.stringify({ estado: 'Temperature state was UPDATED.' }))
        }
        else {
            res.end(JSON.stringify({ estado: 'Temperature sensor is OFF.' }))
        }
      }

      break;

    default: res.end()
      break;

  }

})
