const coap = require('coap')

let menu = require('node-menu')

menu = menu.disableDefaultHeader()

menu = menu.enableDefaultPrompt()

menu.addDelimiter('-', 40, 'Menu COAP')

menu.addItem(
  'Getting data from humidity',
  () => {
    let request = coap.request({
      hostname: 'localhost',
      pathname: '/sensores/humidity',
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
  'Getting data from light',
  () => {
    let request = coap.request({
      hostname: 'localhost',
      pathname: '/sensores/light',
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
  'Getting data from temperature',
  () => {
    let request = coap.request({
      hostname: 'localhost',
      pathname: '/sensores/temperature',
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