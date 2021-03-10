// Crie uma função para verificar se um valor é Truthy
function maioridadePenal(idade) {
  if (idade > 17) return true;
  else return false;
}

console.log(17);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado, tamanho) {
  console.log(tamanho * lado);
}
perimetro(4, 2);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  console.log(nome, sobrenome);
}
nomeCompleto('Talita', 'Monteiro');

// Crie uma função que verifica se um número é par
function isPar(numero) {
  if (numero % 2 === 0) return 'É par';
  else return 'É impar';
}
console.log(isPar(1892));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado) {
  return typeof dado;
}
console.log(tipoDado(55));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function () {
  console.log('Talita');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
