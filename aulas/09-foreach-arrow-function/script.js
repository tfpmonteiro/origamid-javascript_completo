const img = document.querySelectorAll('img');

// função foreach e seus parametros:
img.forEach(function (item, index, array) {
  // console.log(item, index, array);
});

//arrow function
img.forEach((item, index, array) => {
  // console.log(item, index, array);
});

// ********** EXERCÍCIOS *********

// Mostre no console cada parágrado do site
console.log('***** TODOS OS PARAGRAFOS DO SITE *****');
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console
console.log('***** TEXTOS DOS PARAGRAFOS DO SITE *****');
paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:

console.log('***** CORRIGINDO ERROS *****');
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => console.log(i++));

imgs.forEach(() => i++);
