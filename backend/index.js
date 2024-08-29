import express from "express"
import cors from "cors"

const app = express()
const port = 3000

// Es para recibir json en las peticiones
app.use(express.json())

// Configura CORS para permitir solicitudes desde el origen de tu frontend
app.use(cors({
    origin: 'http://localhost:5173'
}));


// Para este ejemplo usaremos un array simulando la funcion de la base de datos
let usuarios = []

// CRUD
//      Create
//      Read 
//      Update 
//      Delete

/* -------------------------------------------------------------------------- */
/*                                   CREATE                                   */
/* -------------------------------------------------------------------------- */
// req = request -> peticion
// res = response -> respuesta
//  POST = PUBLICAR
app.post('/usuarios', (req, res) => {
    // Guardamos la informacion en formato json que nos envia la aplicacion cliente
    const usuario = req.body
    // Creamos un id que incrementara segun el tamaño del array(total de elementos)
    usuario.id = usuarios.length + 1
    // Usamos el comando push para ingresar un elemento al array
    usuarios.push(usuario)
    // usamos res.status para devolver una respuesta por parte de la aplicacion servidor
    res.status(201).json(usuario)
})

/* -------------------------------------------------------------------------- */
/*                                    READ                                    */
/* -------------------------------------------------------------------------- */
// GET = OBTENER
// OBTENER LA INFORMACION DE UN USUARIO EN ESPECIFICO
app.get('/usuarios/:id', (req, res) => {
    // En la siguiente constante la parsearemos como entero ya que los parametros tomados de una url siempre son de tipo cadena o string.
    const id = parseInt(req.params.id)
    // Para obtener la informacion de un usuario en especifico usamos la funcion propia de los arrays find.
    const usuario = usuarios.find(user => user.id === id)
    // En la siguiente condicion si la variable usuario no esta vacia, se tomara como True y ejecutara la condicion, de lo contrario enviaremos el mensaje de que no se encontro al usuario.
    if (usuario) res.json(usuario)
    else res.status(404).json({ mensaje: 'Usuario no encontrado' })
})

// OBTEMER TODOS LOS USUARIOS
app.get('/usuarios', (req, res) => {
    res.json(usuarios)
})

/* -------------------------------------------------------------------------- */
/*                                   UPDATE                                   */
/* -------------------------------------------------------------------------- */
// UPDATE = ACTUALIZAR
// PUT = TOMAR
app.put('/usuarios/:id', (req, res) => {
    // En la siguiente constante la parsearemos como entero ya que los parametros tomados de una url siempre son de tipo cadena o string.
    const id = parseInt(req.params.id)
    // En la variable user guardaremos al usuario a editar usando la funcion propia de los arrays filter.
    // Con filter usaremos el operador logico "===" para guardar unicamente al usuario cuya id sea identica a la solicitada.
    let user = usuarios.filter(usuario => usuario.id === id)
    // La funcion findIndex nos dara la posicion exacta en la que el usuario se encuentra guardado en el array.
    const index = usuarios.findIndex(usuario => usuario.id === id)
    // con la sintaxis nombre_array[posicion] accederemos al elemento a editar
    // ...usuarios[index] -> desglosaremos todos los atributos del usuario
    // ...req.body -> modificaremos los atributos del usuario
    user = usuarios[index] = { ...usuarios[index], ...req.body }
    res.json(user)
})

/* -------------------------------------------------------------------------- */
/*                                   DELETE                                   */
/* -------------------------------------------------------------------------- */
app.delete('/usuarios/:id', (req, res) => {
    // En la siguiente constante la parsearemos como entero ya que los parametros tomados de una url siempre son de tipo cadena o string.
    const id = parseInt(req.params.id)
    // Como nuestro objetivo es eliminar un usuario, asignaremos a nuestro array nuevamente todos sus elementos con excepcion del elemento que deseamos eliminar.
    // Para realizar esto usaremos la funcion propia de los arrays llamada filter que con el operador logico "!==" solo almacenara todos los elementos diferentes al usuario.id(objetivo a eliminar).
    usuarios = usuarios.filter(usuario => usuario.id !== id)
    // Para comprobar que el proceso se realizo correctamente enviaremos una respuesta por parte del sevidor.
    res.status(204).send()
})


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Se levanto el servidor en el puerto ${port}`)
})