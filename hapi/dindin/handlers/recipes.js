'use strict';

exports.find = function find(request, reply) {
  let sql = 'SELECT * FROM recipes';
  const params = [];

  if (request.query.cuisine) {
    sql += ' WHERE cuisine = ?';
    params.push(request.query.cuisine);
  }

  this.db.all(sql, params, (err, results) => {
    if (err) {
      throw err;
    }

    reply(results);
  });
};

exports.findOne = function findOne(request, reply) {
  const sql = 'SELECT * FROM recipes WHERE id = ?';
  const params = request.params.id;

  this.db.get(sql, params, (err, result) => {
    if (err) {
      throw err
    }

    if (typeof result !== 'undefined') {
      return reply(result);
    }

    return reply('Not found').code(404);
  });
};
