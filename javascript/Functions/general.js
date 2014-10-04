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

// arguments : é um objeto 'array-like' que corresponde
// aos argumentos passados para um função

function imprimiValor( valor ) {
  console.log( valor );
  console.log( arguments.length );
  console.log( arguments.callee ); // faz referência a função em execução
  console.log( arguments.callee.caller ); // faz referência a função que a chamou

}

function chamaFuncao( fn ) {
  fn();
}

chamaFuncao( imprimiValor );

// arguments.callee é muito bom para recursão!
