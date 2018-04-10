import React from 'react'
import PropTypes from 'prop-types'
import {consumeTodo} from './Context'

const TodoMeta = props => (
  <div>
    <ul>
      <li>Preview: {props.preview}</li>
      <li>Completed: {props.completed?'Yes':'No'}</li>
      <li>Author: {props.author_name}</li>
    </ul>
  </div>
);

TodoMeta.propTypes = {
  preview: PropTypes.string,
  completed: PropTypes.bool,
  author_name: PropTypes.string,
};

export default consumeTodo(TodoMeta)

