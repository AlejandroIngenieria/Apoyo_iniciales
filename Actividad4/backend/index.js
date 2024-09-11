import express from "express"
import cors from "cors"

const app = express()
const port = 3000

// Es para recibir json en las peticiones
app.use(express.json({}))

// Configura CORS para permitir solicitudes desde el origen de tu frontend
app.use(cors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization'
}));

const usuarios = [
    {
        registroAcademico: '201823501',
        nombres: 'Luis Alberto',
        apellidos: 'Gonzalez Ruiz',
        contrasena: 'alpha123',
        correoElectronico: 'luis.gonzalez@example.com'
    },
    {
        registroAcademico: '201715302',
        nombres: 'Andrea Paola',
        apellidos: 'Hernandez Vargas',
        contrasena: 'beta456',
        correoElectronico: 'andrea.hernandez@example.com'
    },
    {
        registroAcademico: '201916405',
        nombres: 'Pedro José',
        apellidos: 'Martinez Pineda',
        contrasena: 'gamma789',
        correoElectronico: 'pedro.martinez@example.com'
    },
    {
        registroAcademico: '201724508',
        nombres: 'Gabriela Maria',
        apellidos: 'Cruz Torres',
        contrasena: 'delta101',
        correoElectronico: 'gabriela.cruz@example.com'
    },
    {
        registroAcademico: '201830609',
        nombres: 'Ricardo Javier',
        apellidos: 'Castillo Ramos',
        contrasena: 'epsilon202',
        correoElectronico: 'ricardo.castillo@example.com'
    },
    {
        registroAcademico: '201945701',
        nombres: 'Karla Michelle',
        apellidos: 'Flores Méndez',
        contrasena: 'zeta303',
        correoElectronico: 'karla.flores@example.com'
    },
    {
        registroAcademico: '201712602',
        nombres: 'Fernando Antonio',
        apellidos: 'Lopez Diaz',
        contrasena: 'theta404',
        correoElectronico: 'fernando.lopez@example.com'
    },
    {
        registroAcademico: '201852803',
        nombres: 'Sofia Isabel',
        apellidos: 'Ramirez Soto',
        contrasena: 'iota505',
        correoElectronico: 'sofia.ramirez@example.com'
    },
    {
        registroAcademico: '201934904',
        nombres: 'Mario Ernesto',
        apellidos: 'Mejia Fernandez',
        contrasena: 'kappa606',
        correoElectronico: 'mario.mejia@example.com'
    },
    {
        registroAcademico: '201762105',
        nombres: 'Ana Beatriz',
        apellidos: 'Ortega Salinas',
        contrasena: 'lambda707',
        correoElectronico: 'ana.ortega@example.com'
    }
];

const publicaciones = [
    {
        usuario: 'luis.gonzalez@example.com',
        curso: 'Matemáticas Avanzadas',
        catedratico: 'Dr. Juan Morales',
        mensaje: 'Recuerden que el examen será la próxima semana.',
        fechaCreacion: '2024-09-01'
    },
    {
        usuario: 'andrea.hernandez@example.com',
        curso: 'Historia Universal',
        catedratico: 'Lic. Maria Torres',
        mensaje: 'Entreguen sus ensayos antes del viernes.',
        fechaCreacion: '2024-09-02'
    },
    {
        usuario: 'pedro.martinez@example.com',
        curso: 'Programación I',
        catedratico: 'Ing. Carlos López',
        mensaje: 'La tarea de arreglos se sube mañana.',
        fechaCreacion: '2024-09-03'
    },
    {
        usuario: 'gabriela.cruz@example.com',
        curso: 'Química General',
        catedratico: 'MSc. Luisa Gómez',
        mensaje: 'Revisen el laboratorio de esta semana.',
        fechaCreacion: '2024-09-04'
    },
    {
        usuario: 'ricardo.castillo@example.com',
        curso: 'Física Moderna',
        catedratico: 'Dr. Enrique Castro',
        mensaje: 'La evaluación será virtual este semestre.',
        fechaCreacion: '2024-09-05'
    },
    {
        usuario: 'karla.flores@example.com',
        curso: 'Biología Celular',
        catedratico: 'Lic. Sofia Pineda',
        mensaje: 'No olviden el proyecto final.',
        fechaCreacion: '2024-09-06'
    },
    {
        usuario: 'fernando.lopez@example.com',
        curso: 'Álgebra Lineal',
        catedratico: 'Dr. Julio Fernández',
        mensaje: 'La próxima clase será teórica.',
        fechaCreacion: '2024-09-07'
    },
    {
        usuario: 'sofia.ramirez@example.com',
        curso: 'Literatura Española',
        catedratico: 'Lic. Claudia García',
        mensaje: 'Lectura de "Don Quijote" para el lunes.',
        fechaCreacion: '2024-09-08'
    },
    {
        usuario: 'mario.mejia@example.com',
        curso: 'Sociología General',
        catedratico: 'Dr. Felipe Romero',
        mensaje: 'Examen parcial el próximo miércoles.',
        fechaCreacion: '2024-09-09'
    },
    {
        usuario: 'ana.ortega@example.com',
        curso: 'Economía I',
        catedratico: 'MSc. Carmen Reyes',
        mensaje: 'Revisen el material del segundo parcial.',
        fechaCreacion: '2024-09-10'
    },
    {
        usuario: 'luis.gonzalez@example.com',
        curso: 'Matemáticas Discretas',
        catedratico: 'Dr. Pablo Castillo',
        mensaje: 'No olviden los ejercicios de la página 45.',
        fechaCreacion: '2024-09-11'
    },
    {
        usuario: 'andrea.hernandez@example.com',
        curso: 'Historia de América Latina',
        catedratico: 'Lic. Carlos Luna',
        mensaje: 'El ensayo de la independencia es para el lunes.',
        fechaCreacion: '2024-09-12'
    },
    {
        usuario: 'pedro.martinez@example.com',
        curso: 'Algoritmos y Estructuras de Datos',
        catedratico: 'Ing. Luis Hernández',
        mensaje: 'La tarea de listas enlazadas se entrega el viernes.',
        fechaCreacion: '2024-09-13'
    },
    {
        usuario: 'gabriela.cruz@example.com',
        curso: 'Física General',
        catedratico: 'MSc. Juanita Pérez',
        mensaje: 'Examen práctico el próximo lunes.',
        fechaCreacion: '2024-09-14'
    },
    {
        usuario: 'ricardo.castillo@example.com',
        curso: 'Introducción a la Programación',
        catedratico: 'Lic. Mario Gómez',
        mensaje: 'El proyecto final debe incluir interfaz gráfica.',
        fechaCreacion: '2024-09-15'
    },
    {
        usuario: 'karla.flores@example.com',
        curso: 'Microbiología',
        catedratico: 'Dr. Carlos Méndez',
        mensaje: 'Revisen los materiales para el laboratorio.',
        fechaCreacion: '2024-09-16'
    },
    {
        usuario: 'fernando.lopez@example.com',
        curso: 'Cálculo Diferencial',
        catedratico: 'Ing. Sandra Figueroa',
        mensaje: 'Se dará clase extra para revisar límites.',
        fechaCreacion: '2024-09-17'
    },
    {
        usuario: 'sofia.ramirez@example.com',
        curso: 'Teoría de la Comunicación',
        catedratico: 'Lic. María López',
        mensaje: 'El foro de discusión será el viernes.',
        fechaCreacion: '2024-09-18'
    },
    {
        usuario: 'mario.mejia@example.com',
        curso: 'Psicología General',
        catedratico: 'Dr. Guillermo Orozco',
        mensaje: 'La lectura para el próximo lunes es "Psicología y Sociedad".',
        fechaCreacion: '2024-09-19'
    },
    {
        usuario: 'ana.ortega@example.com',
        curso: 'Marketing Digital',
        catedratico: 'Lic. Fernando Sánchez',
        mensaje: 'El examen final será el próximo jueves.',
        fechaCreacion: '2024-09-20'
    }
];

// Envio de usuarios
app.get("/usuarios",(req,res)=>{
    res.status(200).json(usuarios)
})

// Envio de publicaciones
app.get("/publicaciones",(req,res)=>{
    res.status(200).json(publicaciones)
})

// Creacion de usuario
app.post('/usuarios/crear', (req, res) => {
    // Guardamos la informacion en formato json que nos envia la aplicacion cliente
    const usuario = req.body
    // Usamos el comando push para ingresar un elemento al array
    usuarios.push(usuario)
    // usamos res.status para devolver una respuesta por parte de la aplicacion servidor
    res.status(201).json(usuario)
})


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Se levanto el servidor en el puerto ${port}`)
})