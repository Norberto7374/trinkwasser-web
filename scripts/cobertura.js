const zonasActivas = ["54080", "53140", "02480"];

const cpInput = document.getElementById("cp");
const mensaje = document.getElementById("mensaje-cp");
const btn = document.getElementById("btn-agendar");

cpInput.addEventListener("input", () => {
  const cp = cpInput.value.trim();

  // Validación básica
  if (cp.length !== 5 || isNaN(cp)) {
    mensaje.innerText = "";
    btn.classList.add("disabled");
    return;
  }

  btn.classList.remove("disabled");

  if (zonasActivas.includes(cp)) {
    // ✅ Zona activa
    mensaje.innerText = "✅ Tenemos entregas programadas en tu zona";

    btn.innerHTML = `<i class="fa-solid fa-calendar-check"></i> Agendar entrega en mi zona`;

    btn.href = generarMensajeZona(cp);

  } else {
    // 🔄 Zona nueva
    mensaje.innerText = "📍 Aún no tenemos ruta activa, pero podemos abrir cobertura";

    btn.innerHTML = `<i class="fa-solid fa-location-dot"></i> Solicitar apertura de ruta`;

    btn.href = generarMensajeNuevaZona(cp);
  }
});

function generarMensajeZona(cp) {
  return `https://wa.me/525554144400?text=Hola,%20quiero%20agendar%20una%20entrega%20de%20agua%20Trinkwasser.%0A📍%20CP:%20${cp}%0A💧%20Consumo:%20____%0A🏢%20Tipo:%20casa%20o%20negocio`;
}

function generarMensajeNuevaZona(cp) {
  return `https://wa.me/525554144400?text=Hola,%20me%20interesa%20el%20servicio%20de%20agua%20Trinkwasser.%0A📍%20CP:%20${cp}%0A💧%20Consumo:%20____%0A🏢%20Tipo:%20casa%20o%20negocio%0AMe%20gustaría%20saber%20si%20pueden%20abrir%20ruta%20en%20mi%20zona`;
}
