import React from 'react'
import { consumeModel, provideModel } from '../ModelContext'

const context = React.createContext()

function __authorToState (author) {
  if (!author) return {}
  return {
    name: author.get('name')
  }
}

export function todoToState (todo) {
  // Sets all attributes used for display
  let state = {}
  state.title = todo.get('title')
  state.description = todo.get('description')
  state.completed = todo.get('completed')

  // call getter functions to compute properties
  state.preview = todo.preview()

  // bind the side-effect functions
  state.toggle = todo.toggle.bind(todo)
  state.setTitle = todo.setTitle.bind(todo)
  state.setDescription = todo.setDescription.bind(todo)

  // load the state for nested models
  let author_state = __authorToState(todo.get('author'))
  Object.keys(author_state).forEach(key => {
    // flattening nested elements lets the component assume
    // than the values will not be within optional objects.
    // The tradeoff is a longer name for simple components
    state[`author_${key}`] = author_state[key]
  })

  return state
}

export function consumeTodo (Child) {
  return consumeModel(context, Child)
}

export function provideTodo (Child, todo) {
  return provideModel(context, Child, todo, todoToState)
}
