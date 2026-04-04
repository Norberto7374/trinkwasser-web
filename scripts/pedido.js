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
  const productos = document.querySelectorAll(".producto-item");

let listaProductos = "";

productos.forEach(item => {
  const producto = item.querySelector(".producto").value;
  const cantidad = item.querySelector(".cantidad").value;
  const marca = item.querySelector(".marca").value;
  const tipoOperacion = item.querySelector(".tipo-operacion").value;

  if (cantidad && cantidad > 0) {
    listaProductos += `• ${producto} | ${cantidad} pzas | ${marca} | ${tipoOperacion}\n`;
  }
});
  
  const garrafones = document.getElementById("garrafones").value;
  const tipo = document.getElementById("tipo").value;
  const horario = document.getElementById("horario").value;
  const pago = document.getElementById("pago").value;

  const pedidoID = "TW-" + Date.now().toString().slice(-6);
  // 🔥 MENSAJE PROFESIONAL (MISMO ESTILO QUE EXPANSIÓN)
  const mensaje = `Hola, quiero realizar un pedido de agua Trinkwasser.

📍 *Ubicación:*
${direccion}

👤 *Datos del cliente:*
Nombre: ${nombre}

💧 *Detalle del pedido:*
${listaProductos}

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

document.getElementById("agregar-producto").addEventListener("click", () => {
  const container = document.getElementById("productos-container");

  const nuevo = document.createElement("div");
  nuevo.classList.add("producto-item");

  nuevo.innerHTML = `
  <div class="producto-row">

    <select class="producto">
      <option value="Garrafón 20L">Garrafón 20L</option>
      <option value="Garrafón 10L">Garrafón 10L</option>
    </select>

    <input 
      type="number" 
      class="cantidad" 
      placeholder="Cantidad"
      min="1"
    >

    <select class="marca">
      <option value="Genérico">Genérico</option>
      <option value="Ciel">Ciel</option>
      <option value="Bonafont">Bonafont</option>
      <option value="Epura">Epura</option>
    </select>

    <select class="tipo-operacion">
      <option value="Propio">Propio</option>
      <option value="Préstamo">Préstamo</option>
      <option value="Compra">Compra</option>
    </select>

  </div>
`;

  container.appendChild(nuevo);
});
