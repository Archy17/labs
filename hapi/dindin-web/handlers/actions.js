const axios = require('axios');

exports.login = login;

function login(request, reply) {
  const API_URL = `${this.apiBaseUrl}/login`;

  axios
    .post(API_URL, request.payload)
    .then(response => {
      if (response.status !== 200) {
        return reply.redirect(`${this.webBaseUrl}/login`);
      }

      request.cookieAuth.set({ token: response.data.token });

      reply.redirect(this.webBaseUrl);
    })
    .catch(err => {
      console.error(err);
    });
}
