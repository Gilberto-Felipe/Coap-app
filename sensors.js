const coap = require('coap')

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
// console.log(getRandomIntInclusive(100,1000));


// humidity sensor
let requestHU = coap.request({
    hostname: 'localhost',
    pathname: '/sensores/humidity',
    method: 'POST'
})

requestHU.on('response', (res) => {
    let respuesta = JSON.parse(res.payload.toString());
    console.log(respuesta.estado)
})

requestHU.write(JSON.stringify({ activar: true }))

requestHU.end()


setInterval(() => {

    let humidity = getRandomIntInclusive(1,100)

    let req = coap.request({
        hostname: 'localhost',
        pathname: `/sensores/humidity`,
        method: 'PUT'
    })

    req.on('response', (res) => {
        let respuesta = JSON.parse(res.payload.toString());
        console.log(respuesta.estado)
    })

    req.end(JSON.stringify({ value: `${humidity}` }))

}, 4000);


// light sensor
let requestLI = coap.request({
    hostname: 'localhost',
    pathname: '/sensores/light',
    method: 'POST'
})

requestLI.on('response', (res) => {
    let respuesta = JSON.parse(res.payload.toString());
    console.log(respuesta.estado)
})

requestLI.write(JSON.stringify({ activar: true }))

requestLI.end()


setInterval(() => {

    let light = getRandomIntInclusive(100,1000)

    let req = coap.request({
        hostname: 'localhost',
        pathname: `/sensores/light`,
        method: 'PUT'
    })

    req.on('response', (res) => {
        let respuesta = JSON.parse(res.payload.toString());
        console.log(respuesta.estado)
    })

    req.end(JSON.stringify({ value: `${light}` }))

}, 4000);


// temperature sensor
let requestTE = coap.request({
    hostname: 'localhost',
    pathname: '/sensores/temperature',
    method: 'POST'
})

requestTE.on('response', (res) => {
    let respuesta = JSON.parse(res.payload.toString());
    console.log(respuesta.estado)
})

requestTE.write(JSON.stringify({ activar: true }))

requestTE.end()


setInterval(() => {

    let temperature = getRandomIntInclusive(1,100)

    let req = coap.request({
        hostname: 'localhost',
        pathname: `/sensores/temperature`,
        method: 'PUT'
    })

    req.on('response', (res) => {
        let respuesta = JSON.parse(res.payload.toString());
        console.log(respuesta.estado)
    })

    req.end(JSON.stringify({ value: `${temperature}` }))

}, 4000);



