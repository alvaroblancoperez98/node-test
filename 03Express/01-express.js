const express = require('express')
const bodyParser  = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


require('dotenv').config()

const port = process.env.PORT || 3005

//Conexión a base de datos
const mongoose = require('mongoose');
//Variables que tendremos siempre:
//Lo correcto será declararlas EN VARIABLES DE ENTORNO
//para que nadie vea directamente nuestras credenciales
/*
const user = 'cursonode';
const password = 'Um6zosxrrT2qfneo';
const dbname = 'database_pokemon';
*/
const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_password}@cluster0.xh3rvl2.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`; //URL de conexión, que completaremos luego
mongoose.connect(uri,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))

//Middleware
app.use(express.static(__dirname + '/public'))

//Motor plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//Peticiones basicas http
app.get('/', (req, res) => {
  res.render("index", {titulo : "mi titulo dinamico"})
})

app.get('/contacto', (req, res) => {
    res.render("contacto", {tituloContacto : "Estas en contacto jaja"})
})

//LLamadas a las rutas
app.use('/', require('./router/rutas'))
app.use('/pokemon', require('./router/pokemon'))


app.use((req, res) => {
    res.status(404).render("404", {
        titulo404: "Por aqui no es cruck",
        descripcion404: "Te has equivocado de ruta"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})