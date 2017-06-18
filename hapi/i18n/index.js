const Hapi = require('hapi');
const Path = require('path');
const Accept = require('accept');

const server = new Hapi.Server({
  app: {
    i18n: {
      supportedLangs: ['en', 'fr', 'zh'],
      defaultLang: 'en',
    },
  },
});
server.connection({ port: 4000 });

server.handler('i18n-view', (route, options) => {
  const view = options.view;

  return function(request, reply) {
    const settings = server.settings.app.i18n;
    const langs = Accept.languages(request.headers['accept-language']);
    const length = langs.length;

    for (let i = 0; i < length; i += 1) {
      if (settings.supportedLangs.indexOf(langs[i]) !== -1) {
        return reply.view(`${view}_${langs[i]}`, options.context);
      }
    }

    reply.view(`${view}_${settings.defaultLang}`);
  };
});

server.register(require('vision'), err => {
  if (err) {
    throw err;
  }

  server.views({
    engines: {
      hbs: require('handlebars'),
    },
    path: Path.join(__dirname, 'templates'),
  });

  server.route([
    {
      method: 'GET',
      path: '/',
      handler: {
        'i18n-view': {
          view: 'index',
          context: { name: 'Eric' },
        },
      },
    }
  ]);

  server.start(() => console.log(`Server started on ${server.info.uri}`));
});
