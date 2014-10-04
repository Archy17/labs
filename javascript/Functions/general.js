// Declaração de função
function soma( a, b ) {
  return a + b;
}

// Expressão de função: atribuir uma função anônima a uma variável
var multiplica = function( a, b ) {
  return a * b;
};

/*
  === Diferenças

  Declarações de função são içadas para o topo do código,
  sendo carregadas primeiro que qualquer outro código.
  Você pode executar essas funções de qualquer local.

*/
