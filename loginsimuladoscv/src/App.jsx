// Autor: Ruth Sánchez, Mejora: Sophia Chuquillangui (IFM)
// Fecha: 22/06/2025
// Descripción: Versión mejorada con validación, múltiples roles, UX/UI moderna y separación de componentes.

import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import UserDashboard from "./components/DashboardUsuario";
import "./App.css";

const USUARIOS_VALIDOS = [
    {
        username: "SophieCV",
        password: "123456",
        rol: "Usuario",
        nombre: "Sophie Chuquillangui",
        email: "sophie.cv@uisek.edu.ec",
        avatar: "https://i.pinimg.com/736x/53/32/1c/53321c7b141c8a8e5c5c3386f54e5565.jpg"
    },
    {
        username: "Admin",
        password: "123456",
        rol: "Administrador General",
        nombre: "Admin",
        email: "admin@uisek.edu.ec",
        avatar: "https://i.pinimg.com/736x/0a/ef/96/0aef9651af566036606524702d92aa9c.jpg"
    },
    {
        username: "Soporte",
        password: "000000",
        rol: "Soporte",
        nombre: "Equipo de Soporte",
        email: "soporte@uisek.edu.ec",
        avatar: "https://i.pinimg.com/736x/8d/a8/73/8da873b415e7a808e563721f28b8da8e.jpg"
    }
];

function App() {
    const [perfil, setPerfil] = useState(null);
    const [temaOscuro, setTemaOscuro] = useState(false);

    const manejarLogin = async (usuario, clave, setError, setCargando, setIntentos, intentos) => {
        const usuarioEncontrado = USUARIOS_VALIDOS.find(
            (u) => u.username === usuario && u.password === clave
        );

        if (!usuario || !clave) {
            setError("Todos los campos son obligatorios.");
            return;
        }

        if (usuarioEncontrado) {
            setError("");
            setCargando(true);

            setTimeout(() => {
                setPerfil(usuarioEncontrado);
                setCargando(false);
                setIntentos(0);
            }, 2000);
        } else {
            setIntentos((prev) => prev + 1);
            if (intentos + 1 >= 3) {
                setError("Demasiados intentos fallidos. Acceso bloqueado.");
            } else {
                setError("Credenciales incorrectas. Intenta nuevamente.");
            }
        }
    };

   
    const cerrarSesion = () => {
        setPerfil(null);
        setTemaOscuro(false); 
        localStorage.setItem('modoOscuro', 'false');  
    };

    return (
        <div className={`App ${temaOscuro ? "dark" : ""}`}>
            <div className="fondo" />
            <div className="contenido">
                {!perfil ? (
                    <LoginForm manejarLogin={manejarLogin} />
                ) : (
                    <UserDashboard
                        perfil={perfil}
                        temaOscuro={temaOscuro}
                        setTemaOscuro={setTemaOscuro}
                        cerrarSesion={cerrarSesion}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
