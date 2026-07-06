// js/auth.js

document.addEventListener("DOMContentLoaded", async () => {
    const loginOverlay = document.getElementById("admin-denegado");
    const adminPanel = document.getElementById("admin-panel-contenedor");
    const loginForm = document.getElementById("login-form");
    const btnLogout = document.getElementById("btn-logout-admin");

    // Verificar si ya hay una sesión activa al cargar la página
    const checkUser = async () => {
        if (!window.supabase) return;
        const { data: { session } } = await window.supabase.auth.getSession();
        if (!session) {
            loginOverlay.classList.remove("hidden"); // Muestra el login
            adminPanel.classList.add("hidden");      // Oculta el panel
        } else {
            loginOverlay.classList.add("hidden");    // Oculta el login
            adminPanel.classList.remove("hidden"); // Muestra el panel
        }
    };

    // Manejar el inicio de sesión
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("login-email").value.trim();
            const password = document.getElementById("login-password").value;

            // Deshabilitar el botón temporalmente para dar feedback visual
            const submitBtn = loginForm.querySelector("button[type='submit']");
            if (submitBtn) submitBtn.innerText = "Verificando...";

            const { data, error } = await window.supabase.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) {
                alert("Error de autenticación: " + error.message);
                if (submitBtn) submitBtn.innerText = "Ingresar al Panel";
            } else {
                loginOverlay.classList.add("hidden");
                adminPanel.classList.remove("hidden");
                alert("¡Ingreso exitoso!");
                window.location.reload(); 
            }
        });
    }

    // Manejar el cierre de sesión
    if (btnLogout) {
        btnLogout.addEventListener("click", async () => {
            await window.supabase.auth.signOut();
            window.location.reload();
        });
    }

    // Ejecutar comprobación inicial
    checkUser();
});
