import Backbone from 'backbone'

export const Author = Backbone.Model.extend({
  defaults: {
    id: null,
    name: '',
  },
});

