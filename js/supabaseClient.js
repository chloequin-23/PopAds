// js/supabaseClient.js

const SUPABASE_URL = "https://qmyndbtdrwsrdkjmlgxh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFteW5kYnRkcndzcmRram1sZ3hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzNTM1ODUsImV4cCI6MjA5ODkyOTU4NX0.b_TIFgIyBInmAREViPjYIddKXGxdiI6EJSfAa7tSxFo";

// Usamos window.supabase para asegurar disponibilidad global
if (typeof supabase !== 'undefined') {
    window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("Supabase inicializado correctamente");
} else {
    console.error("La librería de Supabase no se cargó. Revisa el CDN en admin.html");
}
