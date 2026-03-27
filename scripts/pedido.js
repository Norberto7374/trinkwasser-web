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

  const mensaje = `Hola, quiero hacer un pedido:%0A
Nombre: ${nombre}%0A
Dirección: ${direccion}%0A
Producto: ${producto}%0A
Cantidad: ${cantidad}%0A
Garrafones: ${garrafones}%0A
Tipo: ${tipo}%0A
Horario: ${horario}%0A
Pago: ${pago}`;

  const telefono = "5215670144747"; 

  window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
});
