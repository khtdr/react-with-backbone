import React from 'react'
import { hot } from 'react-hot-loader'

import Editor from './Editor'
import Meta from './Meta'

import './style.css'
class TodoApp extends React.Component {
  render() {
    return (
      <div className='TodoApp'>
        <Editor />
        <Meta />
      </div>
    )
  }
}

export default hot(module)(TodoApp);
