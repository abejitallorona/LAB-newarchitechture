const temporizadorContador = document.getElementById("counter-time");

const startGame = async () => {
  try {
    const response = await fetch("http://localhost:5050/start", {
      method: "POST",
    });
    const data = await response.json();
    console.log("Respuesta al iniciar:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

startGame();

const divJugadores = document.getElementById("players-choice");
const estadoContador = document.getElementById("counter-status");

const intervaloJuego = () => {
  let contador = 20;
  let intervalo = setInterval(() => {
    temporizadorContador.innerHTML = parseInt(contador);
    contador--;
    if (contador < 0) {
      contador = 20;
      clearInterval(intervalo);
      mostrarPartida();
    }
  }, 1000);
};

const mostrarPartida = async () => {
  try {
    const respuesta = await fetch("http://localhost:5050/check");
    const data = await respuesta.json();
    estadoContador.innerHTML = "Volviendo a empezar...";
    
    data.forEach((jugador) => {
      const textoJugador = document.createElement("h3");
      textoJugador.innerHTML = `${jugador.nombre} seleccionó ${jugador.seleccion}`;
      divJugadores.appendChild(textoJugador);
    });
  
    if (data.length < 2) {
      const textoJugador = document.createElement("h3");
      textoJugador.innerHTML = "Jugadores incompletos :c";
      divJugadores.appendChild(textoJugador);
    }
  
    let contadorDisplay = 5;
    let intervaloDisplay = setInterval(async () => {
      temporizadorContador.innerHTML = parseInt(contadorDisplay);
      contadorDisplay--;
      if (contadorDisplay < 0) {
        divJugadores.innerHTML = "";
        await fetch("http://localhost:5050/reset", {
          method: "POST",
        });
        estadoContador.innerHTML = "Tiempo restante D:";
        clearInterval(intervaloDisplay);
        intervaloJuego();
      }
    }, 1000);
  } catch (error) {
    console.error("Error en mostrarPartida:", error);
  }
};

intervaloJuego();
