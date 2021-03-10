//objetos podem possuir funções como propriedades
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado; //o this ('desse contexto') faz referencência ao lado do objeto.
  },
};

console.log(quadrado.area(4), quadrado.perimetro(4));

//refatorando as funções acima
var triangulo = {
  lados: 3,
  area: (lado) => lado * lado,
};

//também é possível add props:
triangulo.perimetro = function (lado) {
  return lado * triangulo.lados;
};

console.log(triangulo.area(3), triangulo.perimetro(3));

// Ao criar um objeto, herdamos propriedades do Object nativo do JS. Entre eles

console.log(triangulo.hasOwnProperty('lados')); //verifica se existe a propriedade informada no objeto (retorno booleano)
console.log(triangulo.valueOf()); // retorna as propried
