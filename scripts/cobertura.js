const zonasActivas = ["54080", "53140", "02480"];

const mapaZonas = {
  "54080": "Tlalnepantla Estado de Mexico",
  "53140": "Naucalpan Estado de Mexico",
  "02480": "Azcapotzalco Ciudad de Mexico"
};

const inputCP = document.getElementById("cp");
const mensaje = document.getElementById("mensaje-cp");
const btn = document.getElementById("btn-agendar");
const mapa = document.getElementById("mapa-frame"); 


inputCP.addEventListener("input", () => {
  const cp = inputCP.value;

  // Reset
  btn.classList.add("disabled");
  btn.removeAttribute("href");
  mensaje.innerText = "";
  
  if (cp.length === 5) {

    if (zonasActivas.includes(cp)) {

      // ✅ ZONA ACTIVA
      mensaje.textContent = "✅ Tenemos cobertura en tu zona";
      
      btn.textContent = "📅 Solicitar entrega programada";
      btn.href = `pedido.html?cp=${cp}`;
      btn.classList.remove("disabled");
      btn.classList.remove("btn-expansion");

    } else {

      // 🔥 FUERA DE ZONA
      mensaje.textContent = "📍 Podemos abrir cobertura en tu zona";

      btn.textContent = "📍 Solicitar servicio en mi zona";
      btn.href = `expansion.html?cp=${cp}`;
      btn.classList.remove("disabled");
      btn.classList.add("btn-expansion");

    }

  } else {
    // Estado inicial
    mensaje.textContent = "";
    btn.textContent = "📅 Validando cobertura...";
    btn.classList.add("disabled");    
  }
      // 🔥 MAPA GENERAL
  if (mapaZonas[cp]) {
    mapa.src = `https://www.google.com/maps?q=${encodeURIComponent(mapaZonas[cp])}&output=embed`;
  } else {
    mapa.src = "https://www.google.com/maps?q=Estado%20de%20Mexico&output=embed";
  }
});
