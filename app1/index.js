const idUnico = Date.now();

let jugadorActual = {
  id: idUnico
};

const nombreUsuario = document.getElementById("player-name");
const botonPiedra = document.getElementById("btn-rock");
const botonPapel = document.getElementById("btn-paper");
const botonTijera = document.getElementById("btn-scissors");

const playRound = async (seleccion) => {
  jugadorActual = {
    ...jugadorActual,
    seleccion,
    nombre: nombreUsuario.value
  };

  try {
    const respuesta = await fetch("http://localhost:5050/play-round/" + idUnico, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jugadorActual)
    });
    const data = await respuesta.json();
    console.log("Respuesta del POST:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

botonPiedra.addEventListener("click", () => playRound("🪨"));
botonPapel.addEventListener("click", () => playRound("📄"));
botonTijera.addEventListener("click", () => playRound("✂️"));
