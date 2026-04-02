const zonasActivas = ["54080", "53140", "02480"];

const cpInput = document.getElementById("cp");
const mensaje = document.getElementById("mensaje-cp");
const btn = document.getElementById("btn-agendar");

cpInput.addEventListener("input", () => {
  const cp = cpInput.value.trim();

  // Validación básica
  if (cp.length !== 5 || isNaN(cp)) {
    mensaje.innerText = "";
    btn.classList.add("disabled");
    return;
  }

  btn.classList.remove("disabled");

if (zonasActivas.includes(cp)) {
  mensaje.innerText = "✅ Tenemos cobertura en tu zona";
  btn.classList.remove("disabled");
  btn.href = `pedido.html?cp=${cp}`;
} else {
  mensaje.innerText = "📍 Estamos abriendo cobertura en tu zona";
  btn.classList.add("disabled"); // 👈 bloquea pedido
}
