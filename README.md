Uso el dotenv para poder generar los cambios con process usando el archivo .env

.env= {
PORT= 4000
db_user=node
db_password=evhZiLWGeglJqVJt
db_name=database_pokemon
}

He implementado dos modulos mas de mi base de datos y los muestro en tablas para poder verlos y modificarlos a tu gusto
Para eso he trabajado con moongose, ejs y express(Usando body-parser que al poner extended false usa la libreria querystring) que nos facilita la conexion y consultas con la base de datos, trabajar con plantillas que nos facilitara en un futuro cualquier cambio y el enrutado de todos las vistas