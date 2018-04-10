import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './TodoApp';
import {Todo as TodoModel} from './models/todo';
import {provideTodo} from './TodoApp/Context'

const todo = new TodoModel({
  title:'title goes here',
  author_id:1,
})
const App = provideTodo(TodoApp, todo)
ReactDOM.render(<App />, document.getElementById('root'));
