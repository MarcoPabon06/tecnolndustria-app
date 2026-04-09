// --- Navegación y Sesión ---
function iniciarSesion() {
    const username = document.getElementById('username-input').value.trim();
    if (username === "") {
        alert("Por favor, ingresa tu nombre para continuar.");
        return;
    }
    
    document.getElementById('welcome-message').innerText = `Hola, ${username}`;
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('dashboard-screen').classList.add('active');
}

function cerrarSesion() {
    document.getElementById('username-input').value = '';
    document.getElementById('dashboard-screen').classList.remove('active');
    document.getElementById('login-screen').classList.add('active');
}

function mostrarSeccion(idSeccion) {
    // Ocultar todas las secciones
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active-section');
    });
    // Mostrar la seleccionada
    document.getElementById(idSeccion).classList.add('active-section');

    // Actualizar estilos del menú
    document.querySelectorAll('.nav-links li').forEach(li => {
        li.classList.remove('active-nav');
    });
    event.target.classList.add('active-nav');
}

// --- Fórmulas Físicas ---

// 1. Calor: Q = m * c * ΔT
function calcularCalor() {
    const m = parseFloat(document.getElementById('calor-m').value);
    const c = parseFloat(document.getElementById('calor-c').value);
    const dt = parseFloat(document.getElementById('calor-dt').value);
    
    if(isNaN(m) || isNaN(c) || isNaN(dt)) return alert("Completa todos los campos");
    
    const q = m * c * dt;
    document.getElementById('res-calor').innerText = `Resultado: Q = ${q.toFixed(2)} Joules`;
}

// 2. Temperatura: °C = (°F - 32) / 1.8 | K = °C + 273
function calcularTemperatura() {
    const f = parseFloat(document.getElementById('temp-f').value);
    if(isNaN(f)) return alert("Ingresa un valor válido");
    
    const c = (f - 32) / 1.8;
    const k = c + 273;
    document.getElementById('res-temp').innerText = `°C = ${c.toFixed(2)} | K = ${k.toFixed(2)}`;
}

// 3. Presión: P = F / A
function calcularPresion() {
    const f = parseFloat(document.getElementById('pres-f').value);
    const a = parseFloat(document.getElementById('pres-a').value);
    
    if(isNaN(f) || isNaN(a)) return alert("Completa todos los campos");
    if(a === 0) return alert("El área no puede ser 0");

    const p = f / a;
    document.getElementById('res-presion').innerText = `Resultado: P = ${p.toFixed(2)} Pascales (Pa)`;
}

// 4. Caudal Volumétrico: Q = V / t
function calcularCaudalVol() {
    const v = parseFloat(document.getElementById('cv-v').value);
    const t = parseFloat(document.getElementById('cv-t').value);
    
    if(isNaN(v) || isNaN(t)) return alert("Completa todos los campos");
    if(t === 0) return alert("El tiempo no puede ser 0");

    const q = v / t;
    document.getElementById('res-cv').innerText = `Resultado: Q = ${q.toFixed(2)} m³/s`;
}

// 5. Caudal (Área y Velocidad): Q = A * v
function calcularCaudalArea() {
    const a = parseFloat(document.getElementById('ca-a').value);
    const v = parseFloat(document.getElementById('ca-v').value);
    
    if(isNaN(a) || isNaN(v)) return alert("Completa todos los campos");

    const q = a * v;
    document.getElementById('res-ca').innerText = `Resultado: Q = ${q.toFixed(2)} m³/s`;
}

// 6. Energía Potencial: Ep = m * g * h (Usamos g = 9.8 m/s²)
function calcularEnergiaPotencial() {
    const m = parseFloat(document.getElementById('ep-m').value);
    const h = parseFloat(document.getElementById('ep-h').value);
    const g = 9.8;
    
    if(isNaN(m) || isNaN(h)) return alert("Completa todos los campos");

    const ep = m * g * h;
    document.getElementById('res-ep').innerText = `Resultado: Ep = ${ep.toFixed(2)} Joules`;
}

// 7. Eficiencia Energética: η = (E.útil / E.total) * 100
function calcularEficiencia() {
    const eu = parseFloat(document.getElementById('ee-u').value);
    const et = parseFloat(document.getElementById('ee-t').value);
    
    if(isNaN(eu) || isNaN(et)) return alert("Completa todos los campos");
    if(et === 0) return alert("La energía total no puede ser 0");

    const n = (eu / et) * 100;
    document.getElementById('res-ee').innerText = `Eficiencia: η = ${n.toFixed(2)}%`;
}