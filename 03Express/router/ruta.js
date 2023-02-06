const express = require('express');
const router = express.Router();
const Ruta = require('../models/ruta');

router.get('/', async (req, res) => {
    try {
        const arrayRutaDB = await Ruta.find();
        console.log(arrayRutaDB);
        res.render("ruta", { 
            arrayRuta: arrayRutaDB
        })
    } catch (error) {
        console.error(error)
    }
})

router.get('/crearruta', (req, res) => {
    res.render('crearruta'); //nueva vista que llamaremos Crear
 })

 
router.post('/', async (req, res) => {
    const body = req.body //Gracias al body parser, de esta forma
    //podremos recuperar todo lo que viene del body
    console.log(body) //Para comprobarlo por pantalla
    try {
        const arrayRutaDB = new Ruta(body) //Creamos un nuevo Pokemon, gracias al modelo
        await arrayRutaDB.save() //Lo guardamos con .save(), gracias a Mongoose
        res.redirect('/ruta') //Volvemos al listado
    } catch (error) {
        console.log('error', error)
    }
})

router.get('/:id', async(req, res) => { //El id vendrá por el GET (barra de direcciones)
    const id = req.params.id //Recordemos que en la plantilla "pokemon.ejs" le pusimos
    //a este campo pokemon.id, por eso lo llamados con params.id
    try {
        const arrayRutaDB = await Ruta.findOne({ _id: id }) //_id porque así lo indica Mongo
							//Esta variable “Pokemon” está definida arriba con el “require”
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(arrayRutaDB) //Para probarlo por consola
        res.render('detalleruta', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            ruta: arrayRutaDB,
            error: false
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log('Se ha producido un error', error)
        res.render('detalleruta', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Ruta no encontrada!'
        })
    }
})


router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {
        //En la documentación de Mongoose podremos encontrar la
        //siguiente función para eliminar
        const arrayRutaDB = await Ruta.findByIdAndDelete({ _id: id });
        console.log(arrayRutaDB)
        // https://stackoverflow.com/questions/27202075/expressjs-res-redirect-not-working-as-expected
        // res.redirect('/pokemon') //Esto daría un error, tal y como podemos ver arriba
        if (!arrayRutaDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar la ruta.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'ruta eliminada.'
            })
        } 
    } catch (error) {
        console.log(error)
    }
})


router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id)
    console.log('body', body)
    try {
        const arrayRutaDB = await Ruta.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(arrayRutaDB)
        res.json({
            estado: true,
            mensaje: 'ruta editada'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar la ruta'
        })
    }
})



 
module.exports = router;