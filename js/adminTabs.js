// js/adminTabs.js

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-target");

            // 1. Limpiar estados activos de los botones
            buttons.forEach(btn => {
                btn.classList.remove("text-pink-500");
                btn.classList.add("text-gray-400", "hover:text-white");
            });

            // 2. Ocultar todos los contenidos de módulos
            contents.forEach(content => {
                content.classList.remove("active");
            });

            // 3. Activar el botón presionado y mostrar su módulo
            button.classList.add("text-pink-500");
            button.classList.remove("text-gray-400", "hover:text-white");
            
            const targetContent = document.getElementById(target);
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });
});
