// aqui, peso e altura são parametros
function calculoImc(peso, altura) {
  return peso / (altura * altura);
}

console.log(calculoImc(70, 1.67)); // aqui os valores 70 e 1.67 são chamados de argumento

/* ****** função callback *****
São funções que são passadas como parametros em outras funcoes.
*/

addEventListener('click', function () {
  console.log('Houve um click na tela');
});

// a function dentro do addEventListeber pe uma função callbak que é executada toda vez que ocorre um click na tela.
