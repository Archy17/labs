'use strict';

const axios = require('axios');

exports.home = home;

function home(request, reply) {
  const API_URL = this.apiBaseUrl + '/recipes';

  axios
    .get(API_URL)
    .then(response => {
      reply.view('index', { recipes: response.data });
    })
    .catch(err => {
      throw err;
    });
}
