const zonasActivas = ["54080", "53140", "02480"];

const mapaZonas = {
  "54080": "Tlalnepantla Estado de Mexico",
  "53140": "Naucalpan Estado de Mexico",
  "02480": "Azcapotzalco Ciudad de Mexico"
};

const cpInput = document.getElementById("cp");
const mensaje = document.getElementById("mensaje-cp");
const btn = document.getElementById("btn-agendar");
const mapa = document.getElementById("mapa-frame"); 

cpInput.addEventListener("input", () => {
  const cp = cpInput.value.trim();

  // Reset
  btn.classList.add("disabled");
  btn.removeAttribute("href");
  mensaje.innerText = "";

  if (cp.length !== 5 || isNaN(cp)) return;

  // ✅ SI HAY COBERTURA
  if (zonasActivas.includes(cp)) {

    mensaje.innerText = "✅ Tenemos cobertura en tu zona";
    mensaje.style.color = "green";

    btn.classList.remove("disabled");
    btn.href = `pedido.html?cp=${cp}`;

    const ubicacion = mapaZonas[cp];
    mapa.src = `https://www.google.com/maps?q=${encodeURIComponent(ubicacion)}&output=embed`;
  } 
  
  // 🟡 SI NO HAY COBERTURA
  else {

    mensaje.innerText = "📍 Podemos abrir cobertura en tu zona";
    mensaje.style.color = "orange";

    btn.classList.remove("disabled");
    btn.href = `expansion.html?cp=${cp}`;

    // 🔥 MAPA GENERAL
    mapa.src = "https://www.google.com/maps?q=Estado%20de%20Mexico&output=embed";
  }
});
