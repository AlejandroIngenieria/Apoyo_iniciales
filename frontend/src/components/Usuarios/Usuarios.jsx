import { useState, useEffect } from 'react';
import { Form, Button, Table, Modal } from 'react-bootstrap';

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [formData, setFormData] = useState({
        nombre: '',
        email: ''
    });
    const [show, setShow] = useState(false);
    const [editId, setEditId] = useState(null);

    // Obtener todos los usuarios
    useEffect(() => {
        fetch('http://172.17.0.1:5000/usuarios')
            .then(response => response.json())
            .then(data => setUsuarios(data))
            .catch(error => console.error('Error al obtener los usuarios:', error));
    }, []);

    // Manejar el cambio en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Crear un nuevo usuario
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('172.17.0.1:5000/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                setUsuarios([...usuarios, data]);
                setFormData({ nombre: '', email: '' });
            })
            .catch(error => console.error('Error al crear el usuario:', error));
    };

    // Obtener la información de un usuario para editarla
    const handleEdit = (id) => {
        const usuario = usuarios.find(user => user.id === id);
        setFormData({ nombre: usuario.nombre, email: usuario.email });
        setEditId(id);
        setShow(true);
    };

    // Actualizar la información de un usuario
    const handleUpdate = () => {
        fetch(`http://172.17.0.1:5000/usuarios/${editId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                setUsuarios(usuarios.map(user => (user.id === editId ? data : user)));
                setFormData({ nombre: '', email: '' });
                setEditId(null);
                setShow(false);
            })
            .catch(error => console.error('Error al actualizar el usuario:', error));
    };

    // Eliminar un usuario
    const handleDelete = (id) => {
        fetch(`http://172.17.0.1:5000/usuarios/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setUsuarios(usuarios.filter(user => user.id !== id));
            })
            .catch(error => console.error('Error al eliminar el usuario:', error));
    };

    return (
        <div className="container mt-4 py-4 my-4">
            <h2>Llena el formulario</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa aqui tu nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingresa aqui tu email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Crear Usuario
                </Button>
            </Form>

            <h2 className="mt-5">Lista de Usuarios</h2>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.nombre}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleEdit(user.id)} className="me-2">
                                    Editar
                                </Button>
                                <Button variant="danger" onClick={() => handleDelete(user.id)}>
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal para editar */}
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="editNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="editEmail" className="mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Usuarios;
