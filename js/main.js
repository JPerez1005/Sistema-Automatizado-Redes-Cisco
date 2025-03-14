// import {actualizarNombreDelProyecto,copiarCodigo} from './instalacion_proyecto.js';
import {actualizarNombreDelProyecto,copiarCodigo} from './funcionalidades.js';
// import { cargarArchivo, crearMigracion, llenarRestricciones, cambiarNombre, seleccionarRestricciones, estadoRelaciones, actualizarContenidoSeleccionado, copiar_tabla_nombre, manejarMigraciones  } from './estructuracion_proyecto.js';
// import {handleDownloadClick} from './lecturaService.js';
const d=document;

d.addEventListener("DOMContentLoaded", () => {
    const projectName = localStorage.getItem("nombreProyecto");
    
    if (projectName === null) {
        console.log("nombreProyecto no está en localStorage");
    } else {
        console.log("Valor de nombreProyecto:", projectName);
    }
    
});

// Cargar componentes modulares
$(function(){
    $("#sidebar").load("componentes/sidebar.html");
});

// Función para cargar el contenido dinámico
function cargarContenidoDesdeHash() {
    const hash = window.location.hash.substring(1); // Eliminar el '#' del hash
    const contenedor = d.getElementById("main-content"); // Contenedor principal
    if (!contenedor) return;

    // Verificar qué hash está presente y cargar el archivo correspondiente
    switch (hash) {
        case "configuracion_ssh":
            $("#main-content").load("../componentes/configuracion_ssh.html");
            copiarCodigo();
            break;
        case "seguridad_de_puertos":
            $("#main-content").load("../componentes/seguridad_de_puertos.html");
            copiarCodigo();
            break;
        case "configuracion_basica_vlan":
            $("#main-content").load("../componentes/configuracion_basica_vlan.html");
            copiarCodigo();
            break;
        case "enrutamiento":
            $("#main-content").load("../componentes/enrutamiento.html");
            copiarCodigo();
            break;
        default:
            // Cargar una página por defecto o mostrar un mensaje de error
            $("#main-content").html("<p>Página no encontrada</p>");
            break;
    }
}

// Escuchar cambios en la URL
window.addEventListener("hashchange", cargarContenidoDesdeHash);

// Cargar el contenido inicial según el hash actual al cargar la página
d.addEventListener("DOMContentLoaded", cargarContenidoDesdeHash);
