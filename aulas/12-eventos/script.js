const img = document.querySelector('img');

//pega o evento do click e mostra na tela;
function callback(event) {
  console.log(event);
}

// img,addEventListener('click', callback);

const listaAnimais = document.querySelector('.animais-lista');

function callbackLista(event) {
  //apresenta um array dos animais (.lista-animais);
  console.log(event.currentTarget);
  // apresenta o item da lista clicado.
  console.log(event.target);
  // apresenta o evento que foi disparado
  console.log(event.type);
}

//listaAnimais.addEventListener('click', callbackLista);
//console.log(listaAnimais);

/////////////////////////////////////////////////////////////
//////////////////////// EXERCICIOS ////////////////////////
/////////////////////////////////////////////////////////////

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href]');

function callbackLink(event) {
  event.preventDefault();
  event.currentTarget.class;
}

links.forEach((link) => {
  link.addEventListener('click', callbackLink);
});

//console.log(links);

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

function handleElemento(event) {
  console.log(event.currentTarget);
}

const elementos = document.querySelectorAll('body *');
elementos.forEach((item) => {
  item.addEventListener('click', handleElemento)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElemento(event) {
  event.currentTarget.remove();
  console.log(elementos.length());
}

elementos.forEach((item) => {
  item.addEventListener('click', removeElemento)
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function hadleClickT(event) {
  if(event.key ===  't')
    document.documentElement.classList.toggle('textomaior')
}

window.addEventListener('keydown', hadleClickT)