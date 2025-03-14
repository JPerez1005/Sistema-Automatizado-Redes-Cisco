export function actualizarNombreDelProyecto() {
    const projectName = localStorage.getItem("nombreProyecto");
    console.log("Intentando actualizar nombre del proyecto:", projectName); // Log adicional

    if (projectName) {
        const elementos = document.querySelectorAll("#nombreProyecto");
        elementos.forEach(elemento => {
            elemento.value = projectName;
            elemento.textContent = projectName;
        });
        console.log(elementos.length);
    }else{
        console.log("No existe ningun id con ese nombre");
    }
}

export function copiarCodigo() {
    // Crear instancia global de ClipboardJS para todos los botones con la clase copiar-btn
    const clipboard = new ClipboardJS('.copiar-btn', {
        text: function(trigger) {
            // Obtener el atributo data-code del botón clicado
            const codigoId = trigger.getAttribute('data-code');
            const codigoElement = document.querySelector(`#${codigoId}`);

            // Si existe el elemento con ese ID, tomamos su texto
            if (codigoElement) {
                // Clonamos el contenido del <pre> para no modificar el original
                const clon = codigoElement.cloneNode(true);

                // Buscamos todos los inputs dentro del clon
                const inputs = clon.querySelectorAll('input');

                // Reemplazamos cada input con su valor actual
                inputs.forEach(input => {
                    const valor = input.value.trim(); // Obtenemos el valor del input
                    const texto = document.createTextNode(valor); // Creamos un nodo de texto con el valor
                    input.replaceWith(texto); // Reemplazamos el input con el texto
                });

                // Devolvemos el texto del clon, que ahora incluye los valores de los inputs
                return clon.textContent.trim();
            } else {
                return "Código no encontrado";
            }
        }
    });

    // Manejo de eventos de éxito
    clipboard.on('success', function(e) {
        // Cambiar el texto del botón al que se hizo clic
        const trigger = e.trigger;  // El botón que activó el evento
        const originalText = trigger.textContent;
        trigger.textContent = 'copiado!';

        // Regresar el texto original después de 2 segundos
        setTimeout(() => {
            trigger.textContent = originalText;
        }, 1000);

        e.clearSelection();
    });

    // Manejo de eventos de error
    clipboard.on('error', function(e) {
        const trigger = e.trigger;  // El botón que activó el evento
        const originalText = trigger.textContent;
        trigger.textContent = 'Error al copiar';

        // Regresar el texto original después de 2 segundos
        setTimeout(() => {
            trigger.textContent = originalText;
        }, 1000);

        console.error('Error al copiar el código:', e);
    });
}