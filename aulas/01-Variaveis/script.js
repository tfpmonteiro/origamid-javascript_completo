//Nome, idade, comida favorita

const nome = 'Talita Monteiro';
var idade = 31;
var comidaFavorita;

console.log(nome + ', ' + idade + ' anos');

comidaFavorita = 'Frango frito';

const timeDoCoracao = 'Palmeiras';
// var comidaNaoGosta = 'Inhame';
// var localTrabalho = 'Itaú Unibanco';
// var formacaoAcademica = true;
// var cursoGraduacao = 'Sistemas de informação';

//não precisa declarar 'var', pode só separar por vírgula
var comidaNaoGosta = 'Inhame',
  localTrabalho = 'Itaú Unibanco',
  formacaoAcademica = true,
  cursoGraduacao = 'Sistemas de informação';

console.log('**********************************************');
console.log('Formada em:           ' + cursoGraduacao);
console.log('Local de trabalho:    ' + localTrabalho);
console.log(`Torce para o:         ${timeDoCoracao}`);
console.log(`Adora:                ${comidaFavorita}`);
console.log(`Não gosta:            ${comidaNaoGosta}`);
