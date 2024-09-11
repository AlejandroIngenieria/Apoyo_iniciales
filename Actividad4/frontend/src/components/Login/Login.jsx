import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
    const [registroAcademico, setRegistroAcademico] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Funciones asincronas
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/usuarios');
            const usuarios = await response.json();

            // Verificar si el usuario existe
            const usuario = usuarios.find(user =>
                user.registroAcademico === registroAcademico && user.contrasena === contrasena
            );

            if (usuario) {
                // Guardar en sessionStorage
                sessionStorage.setItem('usuario', JSON.stringify(usuario));
                navigate('/'); // Redirigir al inicio o dashboard
            } else {
                setError('Registro académico o contraseña incorrectos.');
            }
        } catch (err) {
            console.error('Error al intentar iniciar sesión:', err);
            setError('Error en el servidor');
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin} className='login mx-4 my-4'>
                <input
                    type="text"
                    placeholder="Registro Académico"
                    value={registroAcademico}
                    onChange={(e) => setRegistroAcademico(e.target.value)}
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
                <button type="submit">Iniciar Sesión</button>
                <button className='my-4'><Link to={"/registrar"} className='links text-dark'>Registro</Link></button>   

            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default Login;
