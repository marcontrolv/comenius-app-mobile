import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import '../assets/css/index.css';
import '../assets/css/alerta.css';

const Login = () => {
    const [alert, setAlert] = useState(undefined);
    const [containerActive, setContainerActive] = useState(false);
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const cookieSession = {
        usuariosID: Cookies.get('usuarioID'),
        sessionsID: Cookies.get('sessionID'),
    };

    useEffect(() => {
        if (cookieSession.sessionsID) window.location.href = '/';
    }, [cookieSession.sessionsID]);

    const handleLogin = e => {
        e.preventDefault();
        if (correo === '' || contrasena === '') {
            setAlert({ tipo: 'obligatorio', alertTitle: 'Error', alertMessage: 'Todos los campos son obligatorios.' });
            return;
        }

        const iniciar = { correo, contrasena };
        
        fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(iniciar),
        })
            .then(response => response.json())
            .then(recibido => {
                if (recibido.usuarioID && recibido.sessionID) {
                    // Establecer cookies
                    Cookies.set('usuarioID', recibido.usuarioID);
                    Cookies.set('sessionID', recibido.sessionID);
                    Cookies.set('correo', recibido.correo);
                    window.location.href = '/'; // Redirigir después de iniciar sesión
                } else if (recibido.tipo) {
                    setAlert({ tipo: recibido.tipo, alertTitle: 'Error', alertMessage: recibido.mensaje });
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
                setAlert({ tipo: 'error', alertTitle: 'Error', alertMessage: 'Hubo un problema al iniciar sesión.' });
            });
    };

    return (
        <>
            <main>
                <div className={`container ${containerActive ? 'active' : ''}`}>
                    <div className="form-box login">
                        <form onSubmit={handleLogin}>
                            <div className="text-cabecera-login">
                                <p>¡Bienvenido!</p>
                                <h2>Inicia sesión</h2>
                                <p>Usando tu cuenta de estudiante.</p>
                            </div>
                            <div className="input-box">
                                <label htmlFor="correo">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="correo"
                                    name="correo"
                                    placeholder="Ingresa tu correo electronico"
                                    value={correo}
                                    onChange={e => setCorreo(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <label htmlFor="contrasena">Contraseña</label>
                                <input
                                    type="password"
                                    id="contrasena"
                                    name="contrasena"
                                    placeholder="Ingresa tu contraseña"
                                    value={contrasena}
                                    onChange={e => setContrasena(e.target.value)}
                                />
                            </div>
                            <div>
                                <button className="btn btn-style btn-aceptar" type="submit">Iniciar</button>
                            </div>
                        </form>
                    </div>

                    {alert && (
                        <>
                            <div id="contenido" className="contenido"></div>
                            <div id="alerta-personalizada" className={`alerta-personalizada ${alert.tipo}`}>
                                <div className="contenido-alerta-personalizada">
                                    <h2 id="titulo-alerta-personalizada">{alert.alertTitle}</h2>
                                    <p id="mensaje-alerta-personalizada">{alert.alertMessage}</p>
                                    {['error', 'aviso', 'obligatorio'].includes(alert.tipo) && (
                                        <button id="boton-alerta-personalizada" onClick={() => setAlert(undefined)}>Aceptar</button>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </>
    );
};

export default Login;
