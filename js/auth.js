// js/auth.js

document.addEventListener("DOMContentLoaded", async () => {
    const loginOverlay = document.getElementById("login-overlay");
    const loginForm = document.getElementById("login-form");
    const btnLogout = document.getElementById("btn-logout");

    // Verificar si ya hay una sesión activa al cargar la página
    const checkUser = async () => {
        const { data: { session } } = await window.supabase.auth.getSession();
        if (!session) {
            loginOverlay.classList.remove("hidden"); // Muestra el login obligatorio
        } else {
            loginOverlay.classList.add("hidden"); // Oculta si ya está logueado
        }
    };

    // Manejar el inicio de sesión
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value;

        const { data, error } = await window.supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            alert("Error de autenticación: " + error.message);
        } else {
            loginOverlay.classList.add("hidden");
            alert("¡Ingreso exitoso!");
            window.location.reload(); // Recarga para activar paneles de datos
        }
    });

    // Manejar el cierre de sesión
    btnLogout.addEventListener("click", async () => {
        await window.supabase.auth.signOut();
        window.location.reload();
    });

    // Ejecutar comprobación inicial
    checkUser();
});
