var btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
  console.log('clicou');
});

btn.classList.add('.ativo');
console.log(btn);

var nome = 'noome';

// nomeie 3 propriedades ou métodos de strings
// length = retorna o número de caracteres da string;
// replace = retorna uma string modificada pelos argumentos;
// slice = divide a string usando como ponto de corte o argumento passado na função.

// nomeie 5 propriedades ou métodos de elementos do DOM
//addEventListener = executa uma função quando ocorre determinado evento;
//querySelector = captura um objeto através da classe css.
// hasFocus = verifica se o elemento esta em foco
// document.activeElement
// document.children

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
//document.execCommand("copy");
