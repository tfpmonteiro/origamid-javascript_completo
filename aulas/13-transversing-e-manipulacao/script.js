const h1 = document.querySelector('h1');
const animaisList = document.querySelector('.animais-lista');

// innerHTML é o conteúdo de dentro da tag
console.log(h1.innerHTML);

// outerHTML é a tag em si + o conteúdo
console.log(h1.outerHTML);

// para mudar um conteúdo, por exemplo o titulo da página
h1.innerHTML = 'Plantas inacabadas';

// navegando pelo DOM

const lista = document.querySelector('.animais-lista');
console.log(lista);

// retorna a sessão que envolve o elemento;
console.log(lista.parentElement);

// também é possível concatenar os parentes, neste caso retornou o body;
console.log(lista.parentElement.parentElement);

// retorna o próximo elemento após o elemento selecionado;
console.log(lista.nextElementSibling);

// retorna o elemento anterior o elemento selecionado;
console.log(lista.previousElementSibling);

// HTMLCollection com os filhos
console.log(lista.children[lista.children.length - 1])

const contato = querySelector('.contato');
const titulo = contato.querySelector('titulo');

contato.appendChild(lista) // move o elemento lista para o final de contato
contato.insertBefore(lista, titulo) // move a lista para antes do titulo
contato.removeChild(titulo) // remove o titulo do contato
contato.replaceChild(lista, titulo) // subsitui a lista pelo titulo 