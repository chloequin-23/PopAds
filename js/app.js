// Variable global para controlar el progreso acumulativo
let currentProgress = 0;

// Función para cambiar de preguntas de forma fluida
function nextStep(stepNumber) {
    // Ocultamos todos los pasos actuales
    document.querySelectorAll('.quiz-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Activamos el paso que corresponde
    document.getElementById(`step-${stepNumber}`).classList.add('active');
}

// Simulación de carga intermedia (Paso de verificación)
function startLoading() {
    nextStep('loading');
    
    // Esperamos 2.5 segundos simulando que analiza las respuestas antes de pasar al bloque final
    setTimeout(() => {
        nextStep('final');
    }, 2500);
}

// Incrementador dinámico de la barra al pulsar el botón de compartir
function incrementBar() {
    if (currentProgress < 100) {
        currentProgress += 20; // Suma 20% en cada pulsación (Requiere 5 clics)
        
        if (currentProgress > 100) currentProgress = 100;
        
        // Actualizamos visualmente el ancho de la barra CSS
        document.getElementById('progress-bar').style.width = currentProgress + '%';
        
        // Comprobamos si completó el proceso
        if (currentProgress === 100) {
            const finalBtn = document.getElementById('final-action-btn');
            finalBtn.removeAttribute('disabled');
            finalBtn.classList.add('ready');
            finalBtn.innerText = "¡ACCEDER AL PANEL AHORA!";
        }
    }
}

// Lógica del botón final (Simulación de redirección / Arbitraje de Tráfico)
function executeRedirect() {
    alert("Aquí se ejecutaría el script de redirección window.location.href hacia tu plataforma externa.");
    // window.location.href = "https://tu-enlace-de-monetizacion.com";
                 }
          
