const zonasActivas = ["54080", "53140", "02480"];

const cpInput = document.getElementById("cp");
const mensaje = document.getElementById("mensaje-cp");

const btnPedido = document.getElementById("btn-pedido");
const btnAgendar = document.getElementById("btn-agendar");

cpInput.addEventListener("input", () => {
  const cp = cpInput.value.trim();

  if (cp.length === 5) {

    if (zonasActivas.includes(cp)) {

      mensaje.innerText = "✅ Tu zona cuenta con entregas disponibles";

      // Activar pedido
      btnPedido.classList.remove("disabled");

      // Agendar también disponible
      btnAgendar.href = generarMensajeAgendar(cp);
      btnAgendar.classList.remove("disabled");

    } else {

      mensaje.innerText = "⚠️ Aún no tenemos ruta activa en tu zona";

      // Bloquear pedido directo
      btnPedido.classList.add("disabled");

      // Solo permitir agendar
      btnAgendar.href = generarMensajeAgendar(cp);
      btnAgendar.classList.remove("disabled");

    }

  } else {
    mensaje.innerText = "";

    btnPedido.classList.add("disabled");
    btnAgendar.classList.add("disabled");
  }
});

function generarMensajeAgendar(cp) {
  return `https://wa.me/525554144400?text=Hola,%20me%20interesa%20el%20servicio%20de%20agua%20Trinkwasser.%0A%0A📍%20Mi%20CP:%20${cp}%0A🏢%20Tipo:%20casa%20o%20negocio%0A💧%20Consumo:%20____%0A%0AMe%20gustaría%20saber%20si%20pueden%20abrir%20ruta%20en%20mi%20zona.`;
}
