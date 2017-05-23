'use strict';

exports.find    = find;
exports.findOne = findOne;
exports.create  = create;
exports.star    = star;

function find(request, reply) {
  let query = 'SELECT * FROM recipes';
  const params = [];

  if (request.query.cuisine) {
    query += ' WHERE cuisine = ?';
    params.push(request.query.cuisine);
  }

  this.db.all(query, params, (err, results) => {
    if (err) {
      throw err;
    }

    reply(results);
  });
};

function findOne(request, reply) {
  const query = 'SELECT * FROM recipes WHERE id = ?';
  const params = request.params.id;

  this.db.get(query, params, (err, result) => {
    if (err) {
      throw err
    }

    if (typeof result !== 'undefined') {
      return reply(result);
    }

    return reply('Not found').code(404);
  });
};

function create(request, reply) {
  const query = 'INSERT INTO recipes (name, cooking_time, prep_time, serves, cuisine, ingredients, directions, user_id) VALUES (?,?,?,?,?,?,?,?)';
  const {
    name,
    cooking_time,
    prep_time,
    serves,
    cuisine,
    ingredients,
    directions,
  } = request.payload;
  const user_id = request.auth.credentials.id;

  const params = [
    name,
    cooking_time,
    prep_time,
    serves,
    cuisine,
    ingredients,
    directions,
    user_id,
  ];

  this.db.run(query, params, err => {
    if (err) {
      throw err;
    }

    reply({ status: 'OK' });
  });
};

function star(request, reply) {
  const query = 'UPDATE recipes SET stars = stars + 1 WHERE id = ?';
  const params = [request.params.id];

  this.db.run(query, params, err => {
    if (err) {
      throw err;
    }

    reply({ status: 'OK' });
  });
}

