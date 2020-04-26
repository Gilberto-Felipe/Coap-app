const coap = require('coap')

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
// console.log(getRandomIntInclusive(100,1000));


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
