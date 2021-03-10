// seleciona os elementos pela ID,  retorna HTML Colection
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// seleciona os elementos pela classe,  retorna HTML Colection
const gridSection = document.getElementsByClassName('grid-section');

// seleciona os elementos pela tag,  retorna HTML Colection
const ul = document.getElementsByTagName('ul');

// Seleciona o primeiro elemento que combinar com o CCS, retorna HTML Colection
const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
var primeiraUl = document.querySelector('ul');

// Seleciona o primeiro elemento que possui um href e começa com #, retorna HTML Colection
const linksInternos = document.querySelector('[href^="#"]');

// Seleciona TODOS os elementos que satisfaçam o parametro passado, retorna NodeList
const animaisImg = document.querySelectorAll('.animais img');

// HTML Colection x Node List

// HTML Colection retorna o objeto 'ao vivo', ou seja, se houver qualquer alteração dentro do html, ele atualiza o resultado na variável;
const gridSectionHTML = document.getElementsByClassName('grid-section');

// Node List retorna o objeto 'estático', ou seja, se houver qualquer alteração dentro do html, ele NÃO atualiza o resultado na variável;
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

//console.log(gridSectionHTML); // retorna os elementos capturados no getElementByClassName + a primeira ul que teve a classe adicionada;
//console.log(gridSectionNode); // retorna os elementos capturados no getElementByClassName SEM a ul que teve a classe adicionada;

// Além disso, o Node List possui diversos métodos para se percorrer o objeto, como o foreach();
gridSectionNode.forEach(function (item, index) {
  //console.log(item);
});

// Para percorrer os itens do HTML Collection, primeiro tem que transformar ele em array;
const arrayGrid = Array.from(gridSectionHTML);
arrayGrid.forEach(function (item, index) {
  //console.log(item);
});

// EXERCICIOS
// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log('***** TODAS IMAGENS DO SITE *****');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra mapa
const imagemMapa = document.querySelectorAll('img[src^="img/mapa"]');
console.log('***** IMAGEM INICIANDO MAPA *****');
console.log(imagemMapa);

// Selecione todos os links internos (onde o href começa com #)
const linksInternosEx = document.querySelectorAll('[href^="#"]');
console.log('***** TODOS OS LINKS INTERNOS INICIANDO COM # *****');
console.log(linksInternosEx);

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisEx = document.querySelector('.animais-descricao h2');
console.log('***** PRIMEIRO H2 DENTRO DE .ANIMAIS-DESCRICAO *****');
console.log(animaisEx);

// Selecione o último p do site
const ultimop = document.querySelectorAll('p');
console.log('***** ÚLTIMO P DO SITE *****');
console.log(ultimop[ultimop.length - 1]);
