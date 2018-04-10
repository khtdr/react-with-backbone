import Backbone from 'backbone'
import {Author as AuthorModel} from './author'

export const Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    description: '',
    completed: false,
    author_id:null,
    author:null,
  },

  initialize: function (options) {
    this.fetchAuthor()
  },

  toggle: function () {
    this.set({
      completed: !this.get('completed')
    })
  },

  setTitle: function(title) {
    this.set({ title })
  },

  setDescription: function(description) {
    this.set({ description })
  },

  preview: function() {
    const title = this.get('title')
    const description = this.get('description')
    if (title) {
      return title.substr(0, 20) + '...'
    } else if (description) {
      return description.substr(0, 20) + '...'
    } else {
      return ''
    }
  },

  fetchAuthor: function() {
    let id = this.get('author_id')
    // We pretend we used this id in some manner 
    // to end up with this following model
    setTimeout(() => {
      let author = new AuthorModel({ id, name:'John Doe' })
      this.set({author})
    }, 1000)
  },

});

