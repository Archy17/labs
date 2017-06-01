'use strict';

const axios = require('axios');

exports.home = home;
exports.viewRecipe = viewRecipe;
exports.login = login;
exports.createRecipe = createRecipe;

function home(request, reply) {
  const API_URL = this.apiBaseUrl + '/recipes';

  axios
    .get(API_URL)
    .then(response => reply.view('index', {
      recipes: response.data,
      user: request.auth.credentials,
    }))
    .catch(err => {
      throw err;
    });
}

function viewRecipe(request, reply) {
  const API_URL = `${this.apiBaseUrl}/recipes/${request.params.id}`;

  axios
    .get(API_URL)
    .then(response => reply.view('recipe', {
      recipe: response.data,
      user: request.auth.credentials,
    }))
    .catch(err => {
      throw err;
    });
}

function login(request, reply) {
  reply.view('login');
}

function createRecipe(request, reply) {
  reply.view('create', {
    user: request.auth.credentials,
  });
}
