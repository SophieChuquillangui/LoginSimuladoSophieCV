/*Autor:Sophia Chuquillangui (IFM)*/
/*Contenido del Dashboard una vez hecho el Login*/

import React from "react";

function DashboardUsuario({ perfil, temaOscuro, setTemaOscuro, cerrarSesion }) {
    return (
        <div className="dashboard">
            <h2>Bienvenido, {perfil.nombre}</h2>
            <img src={perfil.avatar} alt="avatar" className="avatar" />
            <p><strong>Email:</strong> {perfil.email}</p>
            <p><strong>Rol:</strong> {perfil.rol}</p>
            <div className="opciones">
                <button onClick={() => setTemaOscuro(!temaOscuro)}>
                    {temaOscuro ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
                </button>
                <button onClick={cerrarSesion} style={{ marginLeft: "10px", backgroundColor: "#c62828" }}>
                    🔓 Cerrar sesión
                </button>
            </div>
            <section className="actividad">
                <h3>Dashboard de Actividad</h3>
                <p>(Sin actividad reciente...)</p>
            </section>
        </div>
    );
}

export default DashboardUsuario;
