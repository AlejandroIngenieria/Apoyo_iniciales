import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom"

function Inicio() {
    // Variables para almacenar las publicaciones y los filtros
    const [publicaciones, setPublicaciones] = useState([]);
    const [filtroCurso, setFiltroCurso] = useState(""); // Para el campo de texto de curso
    const [filtroCatedratico, setFiltroCatedratico] = useState(""); // Para el campo de texto de catedrático
    const [cursoSeleccionado, setCursoSeleccionado] = useState(""); // Para el dropdown
    const navigate = useNavigate()

    // Verificar todo el tiempo cuantas publicaciones existen
    useEffect(() => {
        // Verificar que exista un usuario logueado
        let user = sessionStorage.getItem('usuario')
        if (!user) { navigate('/login') }

        // Obtener publicaciones
        fetch('http://localhost:3000/publicaciones')
            .then(response => response.json())
            .then(data => setPublicaciones(data))
            .catch(error => console.error('Error al obtener las publicaciones:', error));
    }, [navigate]);

    // Función para manejar cambios en el campo de texto de curso
    const handleFiltroCurso = (e) => {
        setFiltroCurso(e.target.value);
    };

    // Función para manejar cambios en el campo de texto de catedrático
    const handleFiltroCatedratico = (e) => {
        setFiltroCatedratico(e.target.value);
    };

    // Filtrado por curso y catedrático
    const publicacionesFiltradas = publicaciones.filter((publicacion) => {
        return (
            publicacion.curso.toLowerCase().includes(filtroCurso.toLowerCase()) &&
            publicacion.catedratico.toLowerCase().includes(filtroCatedratico.toLowerCase()) &&
            (cursoSeleccionado === "" || publicacion.curso === cursoSeleccionado)
        );
    });

    // Obtener todos los cursos únicos para el dropdown
    const cursosUnicos = [...new Set(publicaciones.map(publicacion => publicacion.curso))];

    return (
        <div>
            {/* Filtro por nombre de curso */}
            <input
                type="text"
                placeholder="Buscar por nombre del curso"
                value={filtroCurso}
                onChange={handleFiltroCurso}
                className="my-2"
            />

            {/* Filtro por nombre de catedrático */}
            <input
                type="text"
                placeholder="Buscar por nombre del catedrático"
                value={filtroCatedratico}
                onChange={handleFiltroCatedratico}
                className="my-2 mx-2"
            />

            {/* Dropdown para seleccionar curso */}
            <select
                value={cursoSeleccionado}
                onChange={(e) => setCursoSeleccionado(e.target.value)}
                className="my-2 mx-2"
            >
                <option value="">Todos los cursos</option>
                {cursosUnicos.map((curso, index) => (
                    <option key={index} value={curso}>
                        {curso}
                    </option>
                ))}
            </select>

            {/* Mostrar publicaciones filtradas */}
            <div className="publicaciones">
                {publicacionesFiltradas.map((publicacion, index) => (
                    <div key={index}>
                        <Card className="cards my-2 mx-2">
                            <Card.Body>
                                <Card.Title>{publicacion.curso}</Card.Title>
                                <Card.Title>{publicacion.catedratico}</Card.Title>
                                <Card.Title>{publicacion.fechaCreacion}</Card.Title>
                                <Card.Text>
                                    {publicacion.mensaje}
                                </Card.Text>
                                <Button variant="primary"><BsFillHandThumbsUpFill /></Button>
                                <Button variant="danger" className="mx-2"><BsFillHandThumbsDownFill /></Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Inicio;
