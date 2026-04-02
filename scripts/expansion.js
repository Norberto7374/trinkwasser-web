const params = new URLSearchParams(window.location.search);
const cp = params.get("cp");

if (cp) {
  document.getElementById("direccion").value = `CP ${cp}`;
}

document.getElementById("expansionForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const direccion = document.getElementById("direccion").value;
  const consumo = document.getElementById("consumo").value;
  const frecuencia = document.getElementById("frecuencia").value;

  const mensaje = `Hola, me interesa abrir cobertura:

👤 Nombre: ${nombre}
📍 Dirección: ${direccion}
💧 Consumo estimado: ${consumo} garrafones
📅 Frecuencia: ${frecuencia}`;

  const url = `https://wa.me/5215670144747?=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
});
