// Usando objetos literais

let carro = {
  marca: "toyota",
  modelo: "supra",
  getDetalhes: function() {
    return this.marca + ' - ' + this.modelo;
  }
}

carro.modelo = "MK4";
console.log(carro.getDetalhes());