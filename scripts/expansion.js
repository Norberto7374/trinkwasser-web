document.getElementById("expansionForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const direccion = document.getElementById("direccion").value;
  const consumo = document.getElementById("consumo").value;
  const frecuencia = document.getElementById("frecuencia").value;

  // 🔥 MENSAJE BIEN FORMATEADO
  const mensaje = `Hola, me interesa abrir cobertura en mi zona:

👤 Nombre: ${nombre}
📍 Dirección: ${direccion}
💧 Consumo estimado: ${consumo} garrafones por semana
📅 Frecuencia: ${frecuencia}`;

  // 🔥 CODIFICACIÓN CLAVE
  const mensajeCodificado = encodeURIComponent(mensaje);

  const url = `https://wa.me/525554144400?text=${mensajeCodificado}`;

  window.open(url, "_blank");
});
