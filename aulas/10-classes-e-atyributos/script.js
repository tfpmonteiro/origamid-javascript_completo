// ******** CLASSES ********
const menu = document.querySelector('.menu');

// adicionando novas classes
menu.classList.add('ativo', 'inativo');

// removendo a classes existentes
menu.classList.remove('inativo');

// se existe a classe ele remove, se não existe ele add;
menu.classList.toggle('inativo');

//é possível realizar essas alterações através da propriedade classname, que retorna uma string com as classes;
menu.className = menu.className + ' teste';
//console.log(menu);

// ******** ATRIBUTOS ********
const img = document.querySelector('img');

// adiciona o atributo e valor
img.setAttribute('alt', 'foto do animal');

// obtém o valor do atributo informado
//console.log(img.getAttribute('alt'));

// Retorna se tem ou não o atributo informado (true/false)
//console.log(img.hasAttribute('alt'));

// ******** EXERCÍCIOS ********
// Adicione a classe ativo a todos os itens do menu
const menuItens = document.querySelectorAll('.menu a');

menuItens.forEach((element) => {
  element.classList.add('ativo');
  //console.log(element.getAttribute('class'));
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach((element) => {
  element.classList.remove('ativo');
});
menuItens[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const image = document.querySelectorAll('img');
image.forEach((img) => {
  //console.log(img, img.hasAttribute('alt'));
});

// Modifique o href do link externo no menu
// const href = document.querySelectorAll('.menu a');
const href = document.querySelectorAll('a[href^="www"]');
href[href.length - 1].setAttribute('href', 'www.google.com');
