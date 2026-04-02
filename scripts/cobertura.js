const zonasActivas = ["54080", "53140", "02480"];

const cpInput = document.getElementById("cp");
const mensaje = document.getElementById("mensaje-cp");
const btn = document.getElementById("btn-agendar");

cpInput.addEventListener("input", () => {
  const cp = cpInput.value.trim();

  // Reset
  btn.classList.add("disabled");
  btn.removeAttribute("href");
  mensaje.innerText = "";

  // Validación básica
  if (cp.length !== 5 || isNaN(cp)) return;

  // SI HAY COBERTURA
  if (zonasActivas.includes(cp)) {
    mensaje.innerText = "✅ Tenemos cobertura en tu zona";
    mensaje.style.color = "green";

    btn.classList.remove("disabled");
    btn.href = `pedido.html?cp=${cp}`;
  } 
  
  // NO HAY COBERTURA
  else {
    mensaje.innerText = "📍 Podemos abrir cobertura en tu zona";
    mensaje.style.color = "orange";

    btn.classList.remove("disabled");
    btn.href = `expansion.html?cp=${cp}`;
  }
});
