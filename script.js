// Datos base
const servicios = ["Corte", "Color", "Peinado"];
const horarios = ["10:30", "11:00", "12:00", "14:00", "15:00"];
const turnosTomados = [];

// Función 1: Mostrar menú
function mostrarServicios() {
  let menu = "Servicios disponibles:\n";
  servicios.forEach((servicio, index) => {
    menu += `${index + 1}. ${servicio}\n`;
  });
  return prompt(menu + "Seleccioná el número de servicio:");
}

// Función 2: Agendar turno
function agendarTurno() {
  const seleccion = mostrarServicios();
  const servicioElegido = servicios[seleccion - 1];

  if (!servicioElegido) {
    alert("Selección inválida. Intenta de nuevo.");
    return;
  }

  let horariosDisponibles = horarios.filter(h => !turnosTomados.includes(h));
  let mensajeHorarios = "Horarios disponibles:\n" + horariosDisponibles.join(" - ");
  let horarioElegido = prompt(`${mensajeHorarios}\nIngresá el horario elegido:`);

  if (!horariosDisponibles.includes(horarioElegido)) {
    alert("Ese horario no está disponible.");
    return;
  }

  const confirmar = confirm(`¿Confirmás el turno para ${servicioElegido} a las ${horarioElegido}?`);
  if (confirmar) {
    turnosTomados.push(horarioElegido);
    alert("¡Turno reservado con éxito!");
    console.log(`Turno: ${servicioElegido} a las ${horarioElegido}`);
  } else {
    alert("No se reservó el turno.");
  }
}

// Función 3: Ejecutar simulador
function iniciarSimulador() {
  alert("Bienvenido/a a la Peluquería Tu Estilo");
  let seguir = true;

  while (seguir) {
    agendarTurno();
    seguir = confirm("¿Querés agendar otro turno?");
  }

  console.log("Turnos tomados:", turnosTomados);
}

iniciarSimulador();
