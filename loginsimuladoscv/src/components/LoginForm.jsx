/*Autor:Sophia Chuquillangui (IFM)*/
/*Separación del Formulario de Login como componente independiente*/

import React, { useState } from "react";

function LoginForm({ manejarLogin }) {
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(false);
    const [intentos, setIntentos] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        if (intentos >= 3) return;
        manejarLogin(usuario, clave, setError, setCargando, setIntentos, intentos);
    };

    return (
        <form onSubmit={onSubmit} className="formulario">
            <h2>Iniciar Sesión</h2>
            <input
                type="text"
                placeholder="Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
            />
            <button type="submit" disabled={cargando || intentos >= 3}>
                {cargando ? <span className="spinner" /> : "Ingresar"}
            </button>
            {error && <p className="error">{error}</p>}
            {intentos > 0 && intentos < 3 && (
                <p className="intentos">Intentos: {intentos}/3</p>
            )}
        </form>
    );
}

export default LoginForm;
