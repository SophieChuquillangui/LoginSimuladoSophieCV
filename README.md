# Proyecto de Simulación de Login - Mejora Individual
por Sophie Chuquillangui


## Descripción General: 
Este proyecto es una mejora individual del ejercicio base de Simulación de Login desarrollado durante la clase. El objetivo principal de este trabajo fue refactorizar y mejorar tanto la presentación visual como la funcionalidad general de la aplicación, siguiendo buenas prácticas en desarrollo web con React. La versión mejorada busca ofrecer una experiencia más profesional, amigable al usuario y coherente con los estándares de diseño de interfaces modernas.

## Tecnologías Utilizadas
React (con useState y useEffect)
JavaScript moderno (ES6+)
HTML5 y CSS3 con Flexbox
React Router DOM (para navegación entre vistas)
Iconos de usuario y diseño responsivo
Animaciones con CSS
Modo oscuro / claro
Validación de formularios en tiempo real

## Mejoras Implementadas
1. Validación de campos:
Se incorporó lógica para verificar que los campos de usuario y contraseña no estén vacíos antes de hacer la simulación de fetch. Se muestra un mensaje de error personalizado si los datos están incompletos o inválidos.

2. Animaciones y mejoras UX:
Se añadieron elementos visuales como:
Fondo con imagen difuminada y filtro de opacidad.
Contenedor centrado para el login con efecto blur/glass.
Spinner animado durante la carga simulada.
Transiciones suaves entre vistas.

3. Roles de usuario simulados:
Se amplió la lógica para incluir múltiples roles:
admin
soporte
usuario

4. Componente separado para el formulario: 
El formulario de login fue refactorizado en un componente independiente para mejorar la organización, reutilización y legibilidad del código.

5. Perfil de usuario personalizado: 
Una vez validado el usuario, se accede a una vista tipo dashboard que muestra:
Nombre y rol del usuario.
Imagen de perfil.
Sección simulada de actividad reciente.

6. Navegación entre rutas: 
Se utilizó react-router-dom para definir rutas como:
/login
/dashboard
/bloqueado

7. Contador de intentos fallidos:
Se implementó un contador que limita los intentos de login fallidos. Al superar los 3 intentos, el acceso se bloquea y se redirige a una pantalla de error/bloqueo.

8. Modo nocturno / diurno: 
Se añadió un botón de cambio de tema (dark/light), que alterna dinámicamente los estilos principales del sitio.

## Estructura del Proyecto
```
/src
│
├── App.jsx               → Componente principal con rutas
├── App.css               → Componente Hoja de Estilos

├── components/
│   ├── LoginForm.jsx     → Formulario separado con validaciones
│   ├── Dashboard.jsx     → Vista posterior al login
```

## Conclusiones
Esta mejora individual permitió aplicar conceptos clave del desarrollo con React, especialmente en cuanto a gestión de estado, separación de componentes, navegación, validaciones, UX y control de errores. El resultado final presenta una aplicación visualmente atractiva, modular y funcional.

## Recomendaciones Futuras
* Conectar el login a un backend real con autenticación por tokens.
* Incorporar persistencia de sesión con localStorage o cookies.
* No simular los roles y crear perfiles reales con diferencia de autorización según la autenticación. 
* Permitir personalización del avatar de usuario desde un formulario.
* Añadir un sistema de registro (sign-up) y recuperación de contraseña.



