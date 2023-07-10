function verificarEdad() {
  let edad = prompt("Ingrese su edad:");

  while (isNaN(edad) || edad < 18) {
    edad = prompt("Debe ser mayor de 18 años. Ingrese su edad nuevamente:");
  }

  alert("¡Bienvenido! Eres mayor de 18 años.");
}

function darBienvenida() {
  let nombre = prompt("Por favor, ingresa tu nombre:");

  while (!isNaN(nombre)) {
    nombre = prompt("Por favor, ingresa tu nombre correctamente:");
  }

  alert("¡Bienvenido, " + nombre + "!");
}

console.log(!false);
verificarEdad();
darBienvenida();
