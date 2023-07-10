let sistema = new Sistema();
window.addEventListener("load", inicio);

function inicio() {
  document
    .getElementById("enviar-Resenia")
    .addEventListener("click", function (e) {
      e.preventDefault();
      agregarResenia(sistema);
    });
}
function agregarResenia(sistema) {
  let formulario = document.getElementById("id-formulario");
  if (formulario.reportValidity()) {
    let nombre = document.getElementById("id-nombre").value;
    let valoracion = document.getElementById("id-valoracion").value;
    let comentario = document.getElementById("id-comentario").value;
    sistema.agregarResenia(new resenia(nombre,valoracion,comentario));
  }
}
