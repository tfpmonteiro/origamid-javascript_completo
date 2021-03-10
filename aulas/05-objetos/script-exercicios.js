// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
  nome: 'Talita',
  sobrenome: 'Monteiro',
  idade: 31,
};

// Crie um método no objeto anterior, que mostre o seu nome completo

//aqui não dá pra usar o 'this' porque a arrow function cria seu próprio contexto;
pessoa.nomeCompleto = () => `Nome completo: ${pessoa.nome} ${pessoa.sobrenome}`;

// aqui é possível usar 'this' pois a function usa o contexto do objeto;
pessoa.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

console.log(pessoa.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};

carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir: (viuHomen) => {
    if (viuHomen) return console.log('AU AU');
  },
};

console.log(cachorro.latir(true));
