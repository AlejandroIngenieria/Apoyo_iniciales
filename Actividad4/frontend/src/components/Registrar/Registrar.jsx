import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registrar() {
    const [registroAcademico, setRegistroAcademico] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegistrar = async (e) => {
        e.preventDefault();
        const nuevoUsuario = {
            registroAcademico,
            nombres,
            apellidos,
            contrasena,
            correoElectronico,
        };

        try {
            const response = await fetch('http://localhost:3000/usuarios/crear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoUsuario),
            });

            if (response.ok) {
                const usuario = await response.json();
                // Guardar en sessionStorage
                sessionStorage.setItem('usuario', JSON.stringify(usuario));
                navigate('/'); // Redirigir al inicio o dashboard
            } else {
                setError('Error al crear usuario. Verifica los datos.');
            }
        } catch (err) {
            console.error('Error al registrar:', err);
            setError('Error en el servidor.');
        }
    };

    return (
        <div>
            <h2>Registrar Usuario</h2>
            <form onSubmit={handleRegistrar} className='login mx-4 my-4'>
                <input
                    type="text"
                    placeholder="Registro Académico"
                    value={registroAcademico}
                    onChange={(e) => setRegistroAcademico(e.target.value)}
                    required
                    className='my-4'
                />
                <input
                    type="text"
                    placeholder="Nombres"
                    value={nombres}
                    onChange={(e) => setNombres(e.target.value)}
                    required
                    className='my-4'
                />
                <input
                    type="text"
                    placeholder="Apellidos"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                    required
                    className='my-4'
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                    className='my-4'
                />
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={correoElectronico}
                    onChange={(e) => setCorreoElectronico(e.target.value)}
                    required
                    className='my-4'
                />
                <button type="submit">Registrar</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default Registrar;
