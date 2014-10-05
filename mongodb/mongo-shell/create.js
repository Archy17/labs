/* 
  
  Create - Operações CRUD

  Método insert : adiciona um documento a uma coleção

*/

// no mongo shell
post = {
  'title': 'MongoDB for NodeJS Developers',
  'author': 'Eric Douglas',
  'date': new Date()
}

> db.blog.insert( post ) // insere o documento post na coleção blog

> db.blog.find() // retorna todos os documentos da coleção blog

> db.blog.find().pretty() // retorna os documentos de forma formatada

