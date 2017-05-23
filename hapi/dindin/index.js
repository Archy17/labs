'use strict';

const Hapi = require('hapi');
const Sqlite3 = require('sqlite3');

const db = new Sqlite3.Database('./dindin.sqlite');
const server = new Hapi.Server();
const validateFunc = (token, callback) => {
  const query = 'SELECT * FROM users WHERE token = ?';
  const params = [token];

  db.get(query, params, (err, result) => {
    if (err) {
      return callback(err, false);
    }

    const user = result;

    if (typeof user === 'undefined') {
      return callback(null, false);
    }

    callback(null, true, {
      id: user.id,
      username: user.username,
    });
  });
};

server.connection({ port: 4000 });
server.bind({ db });
server.register(require('hapi-auth-bearer-token'), err => {
  if (err) {
    throw err;
  }

  server.auth.strategy('api', 'bearer-access-token', {
    validateFunc,
  });

  server.route(require('./routes'));
  server.start(() => console.log(`Server listening at ${server.info.uri}`));
});
