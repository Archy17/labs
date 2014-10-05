/*

  Update - Operações CRUD

  - update(): recebe pelo menos dois parâmetros.
    * o primeiro é algum padrão a ser encontrado na busca
    * o segundo o novo documento a ser adicionado

*/

// adicionando comentários na estrutura do post
> post.comments = []

// atualizando o post buscado pelo seu título (que é único),
// e informando o novo documento a ser inserido/atualizado
// ps: você pode inserir qualquer novo documento nesta operação
> db.blog.update( { 'title': 'mongodb 4 nodejs devs' }, post )

