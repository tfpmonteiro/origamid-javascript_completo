// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 31;
var idadeMilena = 20;

if (minhaIdade > idadeMilena) console.log('É maior');
else if (minhaIdade === idadeMilena) console.log('É igual');
else console.log('É menor');

// Qual valor é retornado na seguinte expressão? **** R: 3
var expressao = 5 - 2 && 5 - ' ' && 5 - 2;

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Talita'; //truthy
var idade = 31; //truthy
var possuiDoutorado = false; //falsy
var empregoFuturo; // falsy
var dinheiroNaConta = 0; // falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console? *** R: falso
if ('Gato' === 'gato' && 5 > 2) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console? *** R: Cão
if ('Gato' === 'gato' || 5 > 2) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// Explicação Bônus: Diferença entre os comparadores '==' e '===';
var numero = 10;

//retorna true, pois o JS não vai levar em conta o tipo da variável;
console.log(numero == '10');

//retorna falso, pois o JS vai levar em conta o tipo da variável;
console.log(numero === '10');
