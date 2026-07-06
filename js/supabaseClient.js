// js/supabaseClient.js

const SUPABASE_URL = "https://qmyndbtdrwsrdkjmlgxh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFteW5kYnRkcndzcmRram1sZ3hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzNTM1ODUsImV4cCI6MjA5ODkyOTU4NX0.b_TIFgIyBInmAREViPjYIddKXGxdiI6EJSfAa7tSxFo";

// Inicialización global del cliente de Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.supabase = supabase;
