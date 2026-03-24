const form = document.getElementById("pedidoForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.querySelector("[name='nombre']").value;
    const producto = document.querySelector("[name='producto']").value;
    const cantidad = document.querySelector("[name='cantidad']").value;

    const mensaje = `Hola, quiero realizar un pedido:%0A
