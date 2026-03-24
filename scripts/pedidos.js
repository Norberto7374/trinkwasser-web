document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("pedidoForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.querySelector("[name='nombre']").value;
        const producto = document.querySelector("[name='producto']").value;
        const cantidad = document.querySelector("[name='cantidad']").value;

        const mensaje = `Hola, quiero realizar un pedido:%0A
Nombre: ${nombre}%0A
Producto: ${producto}%0A
Cantidad: ${cantidad}`;

        const telefono = "525554144400";

        window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");

        alert("Trinkwasser agradece tu preferencia, te contactaremos en breve.");
    });

});
