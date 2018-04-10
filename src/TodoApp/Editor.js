import React from 'react'
import PropTypes from 'prop-types'
import {consumeTodo} from './Context'

class TodoEditor extends React.Component {
  render() {
    return (
      <div className='TodoEditor'>
        <section className='inputs'>
          <label>
            Title
            <input type='text' ref='title' defaultValue={this.props.title} />
          </label>
          <label>
            Description
            <textarea ref='description' defaultValue={this.props.description} />
          </label>
        </section>
        <section className='controls'>
          <label>
            <input type='checkbox' value={this.props.completed}
                   onClick={this.props.toggle} />
            done
          </label>
          <button onClick={this.save}>Save Text</button>
        </section>
      </div>
    )
  }
  save = () => {
    // TODO Each call to the model causes a re-render
    //      If this is a performance issue, then
    //      this would be a good time to formalize the
    //      use case that brought the code to this point,
    //      and create a new method on the model with
    //      a good name.
    this.props.setTitle(this.refs.title.value)
    this.props.setDescription(this.refs.description.value)
  }
}

TodoEditor.propTypes = {
  setTitle: PropTypes.func,
  setDescription: PropTypes.func,
  toggle: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  completed: PropTypes.bool,
};

export default consumeTodo(TodoEditor)

