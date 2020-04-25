const coap = require('coap')

let menu = require('node-menu')

menu = menu.disableDefaultHeader()

menu = menu.enableDefaultPrompt()

menu.addDelimiter('-', 40, 'Menu COAP')

menu.addItem(
  'Obtener datos del sensor de luminosidad',
  () => {
    let request = coap.request({
      hostname: 'localhost',
      pathname: '/sensores/luminosidad',
      method: 'GET'
    })
    request.on('response', (res) => {
      let respuesta = JSON.parse(res.payload.toString());
      console.log(respuesta.estado)
    })
    request.end("")
  },
  null,
  null
)

menu.addItem(
  'Obtener datos del sensor de la computadora',
  () => {
    let request = coap.request({
      hostname: 'localhost',
      pathname: '/sensores/computadora',
      method: 'GET'
    })
    request.on('response', (res) => {
      let respuesta = JSON.parse(res.payload.toString());
      console.log(respuesta.estado)
    })
    request.end("")
  },
  null,
  null
)

menu.addItem(
  'Obtener datos del sensor de la puerta',
  () => {
    let request = coap.request({
      hostname: 'localhost',
      pathname: '/sensores/puerta',
      method: 'GET'
    })
    request.on('response', (res) => {
      let respuesta = JSON.parse(res.payload.toString());
      console.log(respuesta.estado)
    })
    request.end("")
  },
  null,
  null
)

menu.addItem(
  'Obtener datos del sensor de humo',
  () => {
    let request = coap.request({
      hostname: 'localhost',
      pathname: '/sensores/humo',
      method: 'GET'
    })
    request.on('response', (res) => {
      let respuesta = JSON.parse(res.payload.toString());
      console.log(respuesta.estado)
    })
    request.end("")
  },
  null,
  null
)

menu.start()