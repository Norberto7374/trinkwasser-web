const zonasActivas = ["54080", "53140", "02480"];

const cpInput = document.getElementById("cp");
const mensaje = document.getElementById("mensaje-cp");
const btnAgendar = document.getElementById("btn-agendar");

cpInput.addEventListener("input", () => {
  const cp = cpInput.value.trim();

  if (cp.length === 5) {

    btnAgendar.classList.remove("disabled");

    if (zonasActivas.includes(cp)) {

      mensaje.innerText = "✅ Tu zona cuenta con entregas programadas";

      btnAgendar.innerText = "📅 Agendar entrega en mi zona";
      btnAgendar.href = generarMensajeZonaActiva(cp);

    } else {

      mensaje.innerText = "📍 Aún no tenemos ruta activa, pero podemos evaluarlo";

      btnAgendar.innerText = "📩 Solicitar apertura de ruta";
      btnAgendar.href = generarMensajeNuevaZona(cp);

    }

  } else {
    mensaje.innerText = "";
    btnAgendar.classList.add("disabled");
  }
});

function generarMensajeZonaActiva(cp) {
  return `https://wa.me/525554144400?text=Hola,%20me%20interesa%20agendar%20una%20entrega%20de%20agua%20Trinkwasser.%0A%0A📍%20CP:%20${cp}%0A🏢%20Tipo:%20casa%20o%20negocio%0A💧%20Consumo:%20____%0A%0AQuedo%20atento%20a%20la%20programación.`;
}

function generarMensajeNuevaZona(cp) {
  return `https://wa.me/525554144400?text=Hola,%20me%20interesa%20el%20servicio%20de%20agua%20Trinkwasser.%0A%0A📍%20CP:%20${cp}%0A🏢%20Tipo:%20casa%20o%20negocio%0A💧%20Consumo:%20____%0A%0AMe%20gustaría%20saber%20si%20pueden%20abrir%20ruta%20en%20mi%20zona.`;
}
