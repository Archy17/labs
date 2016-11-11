const Hapi = require('hapi');  
 
const server = new Hapi.Server();   
server.connection({ port: 4000 }); 

const options = {
  reporters: {
    myConsoleReporter: [{
      module: 'good-console'
    }, 'stdout']
  }
};

server.route([
  {
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply('Hello World');
    }
  },
  {
    method: 'GET',
    path: '/json',
    handler: function(request, reply) {
      reply({ hello: 'World' });
    }
  }
]);

server.register({
  register: require('good'),
  options,
}, (err) => {
  if (err) {
    throw err;
  }

  server.start((err) => {
    if (err) {
      throw err;
    }

    console.log('Server running at:', server.info.uri);
  });
});
