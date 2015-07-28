import Ember from 'ember';

var ajax = [
  {
    title : 'Favorite link 1',
    url   : 'http://google.com'
  },
  {
    title : 'Favorite link 2',
    url   : 'http://google.com'
  },
  {
    title : 'Favorite link 3',
    url   : 'http://google.com'
  }
];

export default Ember.Route.extend({
  model() {
    return ajax;
  }
});
