const params = new URLSearchParams(window.location.search);
const cp = params.get("cp");

// Insertar CP en el campo
if (cp) {
  document.getElementById("cp").value = cp;
}

document.getElementById("expansionForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const direccion = document.getElementById("direccion").value;
  const consumo = document.getElementById("consumo").value;
  const frecuencia = document.getElementById("frecuencia").value;
  const cp = document.getElementById("cp").value;
  const mensaje = `Hola, me interesa el servicio de agua Trinkwasser.

document.getElementById("expansionForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // 🔥 MENSAJE BIEN FORMATEADO
📍 *Ubicación:*
CP: ${cp}
Dirección: ${direccion}

👤 *Datos del cliente:*
Nombre: ${nombre}

💧 *Consumo estimado:*
${consumo} garrafones por semana

📅 *Frecuencia deseada:*
${frecuencia}

Me gustaría conocer la viabilidad de apertura de ruta en mi zona.`;

  // 🔥 CODIFICACIÓN CLAVE
  const mensajeCodificado = encodeURIComponent(mensaje);
  
  const url = `https://wa.me/5215670144747?text=${mensajeCodificado}`;

  window.open(url, "_blank");
});


