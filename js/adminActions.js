// js/adminActions.js

/**
 * Función genérica para guardar cambios en Supabase
 * @param {string} tabla - Nombre de la tabla
 * @param {object} datos - Objeto con los datos { columna: valor }
 * @param {number} id - ID de la fila a actualizar
 */
async function guardarCambios(tabla, datos, id) {
    const { data, error } = await window.supabase
        .from(tabla)
        .update(datos)
        .eq('id', id);

    if (error) {
        alert("Error al guardar: " + error.message);
    } else {
        alert("¡Cambios guardados con éxito!");
    }
}

/**
 * Función para cargar los valores actuales al entrar al admin
 * Esto hará que los inputs se llenen automáticamente con lo que hay en BD
 */
async function cargarConfiguracion() {
    // Ejemplo: Cargar los colores
    const { data: colores, error } = await window.supabase
        .from('personalizacion_tema')
        .select('*');

    if (colores) {
        colores.forEach(item => {
            const input = document.getElementById(`input-${item.nombre_variable}`);
            if (input) input.value = item.valor_hex;
        });
    }
}

// Inicializar al cargar la página de admin
document.addEventListener("DOMContentLoaded", () => {
    // Solo ejecutamos si estamos en la página de admin
    if (window.location.pathname.includes('admin.html')) {
        cargarConfiguracion();
    }
});
