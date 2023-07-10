class Sistema {
  constructor() {
    this.listaResenias = [];
  }
  agregarResenia(resenia) {
    this.listaResenias.push(resenia);
  }
}
class resenia {
  constructor(nombreResenia, valoracionResenia, comentarioResenia) {
    this.nombre = nombreResenia;
    this.valoracion = valoracionResenia;
    this.comentario = comentarioResenia;
  }
}
