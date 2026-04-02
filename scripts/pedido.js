// ============================
// OBTENER CP DESDE COBERTURA
// ============================
const params = new URLSearchParams(window.location.search);
const cp = params.get("cp");

// Insertar CP en dirección
if (cp) {
  const direccionInput = document.getElementById("direccion");
  direccionInput.value = `CP ${cp}`;
}

// ============================
// ENVÍO A WHATSAPP
// ============================
document.getElementById("pedidoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const direccion = document.getElementById("direccion").value;
  const producto = document.getElementById("producto").value;
  const cantidad = document.getElementById("cantidad").value;
  const garrafones = document.getElementById("garrafones").value;
  const tipo = document.getElementById("tipo").value;
  const horario = document.getElementById("horario").value;
  const pago = document.getElementById("pago").value;

  // 🔥 MENSAJE PROFESIONAL (MISMO ESTILO QUE EXPANSIÓN)
  const mensaje = `Hola, quiero realizar un pedido de agua Trinkwasser.

📍 *Ubicación:*
${direccion}

👤 *Datos del cliente:*
Nombre: ${nombre}

💧 *Detalle del pedido:*
Producto: ${producto}
Cantidad: ${cantidad}
Garrafones: ${garrafones}
Tipo: ${tipo}

⏰ *Entrega:*
Horario: ${horario}

💳 *Forma de pago:*
${pago}

Quedo atento a la confirmación de entrega.`;

  const telefono = "5215670144747";

  // 🔥 CODIFICACIÓN CORRECTA
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
});
