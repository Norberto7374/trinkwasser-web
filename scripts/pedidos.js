document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("pedidoForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.querySelector("[name='nombre']").value;
    const direccion = document.querySelector("[name='direccion']").value;
    const producto = document.querySelector("[name='producto']").value;
    const cantidad = document.querySelector("[name='cantidad']").value;
    const garrafones = document.querySelector("[name='garrafones']").value;
    const tipo = document.querySelector("[name='tipo']").value;
    const horario = document.querySelector("[name='horario']").value;
    const pago = document.querySelector("[name='pago']").value;

    const mensaje = `Hola, quiero realizar un pedido:%0A
    
Nombre: ${nombre}%0A
Dirección: ${direccion}%0A
Producto: ${producto}%0A
Cantidad: ${cantidad}%0A
Garrafones: ${garrafones}%0A
Tipo: ${tipo}%0A
Horario: ${horario}%0A
Pago: ${pago}`;

    

        const telefono = "5215554356827";

        window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");

        alert("Trinkwasser agradece tu preferencia, te contactaremos en breve.");
    });

});
