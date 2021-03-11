// fixando atividade sobre objetos

//Transforme o objeto abaixo em uma construction function
// const pessoa = {
//   nome: 'nome',
//   idade: 0,
//   andar() {
//     console.log(`${this.nome} andou`);
//   }
// }

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(`${nome} andou`);
  }
}

//crie três pessoas: João - 28 anos / Maria - 25 anos / Bruno - 15 anos
const joao = new Pessoa('João', 28);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

console.log(joao, maria, bruno);

// crie uma construction function (Dom) para manipular elementos do dom
function Dom(seletor) {
  this.retornarElemento = function () {
    console.log(document.querySelectorAll(seletor));
  }
}

const listas = new Dom('ul');
listas.retornarElemento()
