import { copiarCodigo } from './funcionalidades.js';
const d = document;

d.addEventListener("DOMContentLoaded", () => {
    const projectName = localStorage.getItem("nombreProyecto");

    if (projectName === null) {
        console.log("nombreProyecto no está en localStorage");
    } else {
        console.log("Valor de nombreProyecto:", projectName);
    }

    // Cargar el sidebar usando una ruta absoluta
    $("#sidebar").load("https://jperez1005.github.io/Sistema-Automatizado-Redes-Cisco/componentes/sidebar.html");

    // Llamar a la función de carga de contenido según el hash en la URL
    cargarContenidoDesdeHash();
});

// Función para cargar el contenido dinámico usando rutas absolutas
function cargarContenidoDesdeHash() {
    const hash = window.location.hash.substring(1); // Obtener el hash sin el '#'
    const contenedor = d.getElementById("main-content"); // Contenedor principal
    if (!contenedor) return;

    let url = ""; // Variable para la URL del componente a cargar

    switch (hash) {
        case "configuracion_ssh":
            url = "https://jperez1005.github.io/Sistema-Automatizado-Redes-Cisco/componentes/configuracion_ssh.html";
            break;
        case "seguridad_de_puertos":
            url = "https://jperez1005.github.io/Sistema-Automatizado-Redes-Cisco/componentes/seguridad_de_puertos.html";
            break;
        case "configuracion_basica_vlan":
            url = "https://jperez1005.github.io/Sistema-Automatizado-Redes-Cisco/componentes/configuracion_basica_vlan.html";
            break;
        case "enrutamiento":
            url = "https://jperez1005.github.io/Sistema-Automatizado-Redes-Cisco/componentes/enrutamiento.html";
            break;
        default:
            url = "https://jperez1005.github.io/Sistema-Automatizado-Redes-Cisco/componentes/default.html";
            break;
    }

    if (url !== "") {
        $("#main-content").load(url, function(response, status, xhr) {
            if (status === "error") {
                console.error("Error cargando el contenido:", xhr.status, xhr.statusText);
            } else {
                copiarCodigo();
            }
        });
    }
}

// Cargar contenido cuando cambia el hash
$(window).on("hashchange", cargarContenidoDesdeHash);

// Cargar contenido inicial si hay un hash en la URL al cargar la página
d.addEventListener("DOMContentLoaded", cargarContenidoDesdeHash);