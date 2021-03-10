const listaAnimais = document.querySelector('.animais-lista');
// pega a altura do objeto
const height = listaAnimais.scrollHeight;

//pega a distância do objeto até o topo
const animaisTop = listaAnimais.offsetTop;
//console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
//pega a distância do objeto até a esquerda
const h2left = primeiroh2.offsetLeft;
//console.log(h2left);

const section = document.querySelector('.animais');

// pega praticamente todas as informações de dimensão e distância do objeto (bottom, height, left, right, top, width, eixo x e eixo y)
const rect = section.getBoundingClientRect();
// console.log(rect);
// console.log(rect.bottom);

// altura e largura sem contar área externa, como a barra de ferramentas do navegador
// console.log(window.innerHeight, window.innerWidth);

// altura e largura CONTANDO a área externa, como a barra de ferramentas do navegador
// console.log(window.outerHeight, window.outerWidth);

// dá a posição do scroll dentro da  página
// console.log(window.pageXOffset, window.pageYOffset);

// verificar largura do browser
const small = window.matchMedia('(max-width: 600px)').matches;
//console.log(small);

// *********** exercicios ***********

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens

function somaImagem() {
  let somaLargura = 0;
  const todasImg = document.querySelectorAll('img');
  todasImg.forEach((img) => {
    somaLargura += img.offsetWidth;
  });
  console.log(somaLargura);
}

// só executra a função depois que a tela for carregada, isso evita com que o JS tente executar a função antes de ter carregado as imagens;
window.onload = function () {
  somaImagem();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeigth = link.offsetHeigth;

  if (linkWidth >= 45 && linkHeigth >= 45) console.log('Possui acessibilidade');
  else console.log('Não possui acessibilidade');
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if (browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}

console.log(document.querySelector('.menu'));
