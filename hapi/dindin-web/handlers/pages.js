'use strict';

const axios = require('axios');

exports.home = home;
exports.viewRecipe = viewRecipe;

function home(request, reply) {
  const API_URL = this.apiBaseUrl + '/recipes';

  axios
    .get(API_URL)
    .then(response => reply.view('index', { recipes: response.data }))
    .catch(err => {
      throw err;
    });
}

function viewRecipe(request, reply) {
  const API_URL = `${this.apiBaseUrl}/recipes/${request.params.id}`;

  axios
    .get(API_URL)
    .then(response => reply.view('recipe', { recipe: response.data }))
    .catch(err => {
      throw err;
    });
}
