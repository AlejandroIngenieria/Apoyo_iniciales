import express from "express"

const app = express()
const port = 3000

// Es para recibir json en las peticiones
app.use(express.json())

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
app.post('/usuarios',(req, res) => {
    const usuario = req.body
    usuario.id = usuarios.length + 1
    usuarios.push(usuario)
    res.status(201).json(usuario)
})

/* -------------------------------------------------------------------------- */
/*                                    READ                                    */
/* -------------------------------------------------------------------------- */
// GET = OBTENER
app.get('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const usuario = usuarios.find(user => user.id === id)
    if (usuario) res.json(usuario)
    else res.status(404).json({mensaje: 'Usuario no encontrado'})
})

/* -------------------------------------------------------------------------- */
/*                                   UPDATE                                   */
/* -------------------------------------------------------------------------- */
// UPDATE = ACTUALIZAR
// PUT = TOMAR
app.put('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let user = usuarios.filter(usuario => usuario.id === id)
    const index = usuarios.findIndex(usuario => usuario.id === id)
    usuarios[index] = {...usuarios[index], ...req.body}
    res.status(204).send()
})

/* -------------------------------------------------------------------------- */
/*                                   DELETE                                   */
/* -------------------------------------------------------------------------- */
app.delete('/usuarios/:id', (req,res) => {
    const id = parseInt(req.params.id)
    usuarios = usuarios.filter(usuario => usuario.id !== id)
    res.status(204).send()
})


// Iniciar el servidor
app.listen(port, ()=>{
    console.log(`Se levanto el servidor en el puerto ${port}`)
})