/*

  Delete : Operações CRUD

  - remove() : deleta permanentemente o documento do db.
  - se chamado sem parâmetros, exclui todos os docs.
  - pode ser passado um padrão para remoção de um doc específico

*/

// remove o documento com este valor de 'title'
db.blog.remove( { title: 'mongodb 4 nodejs devs' } )
