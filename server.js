const express = require('express')
const app = express()
const hbs = require('hbs')

require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', function(req, res) {
    // let salida = {
    //     nombre: 'fernando',
    //     edad: 32,
    //     url: req.url
    // }



    res.render('home', {
        nombre: 'paulino guerra'
    })
})

app.get('/about', function(req, res) {
    // let salida = {
    //     nombre: 'fernando',
    //     edad: 32,
    //     url: req.url
    // }



    res.render('about');
})

app.get('/data', function(req, res) {

    res.send('Hola eichdipis')
})

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${ port }`))