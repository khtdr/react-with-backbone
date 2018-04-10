import React from 'react'

export function provideModel(context, Child, model, toState) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.applyChanges = this.applyChanges.bind(this)
      this.state = toState(model)
    }
    render() {
      return (
        <context.Provider value={this.state}>
          <Child />
        </context.Provider>
      )
    }
    componentDidMount() {
      model.on('change', this.applyChanges)
    }
    componentWillUnmount() {
      model.off('change', this.applyChanges)
    }
    applyChanges() {
      this.setState(toState(model))
    }
  }
}

export function consumeModel(context, Child) {
  return class extends React.Component {
    render() {
      return <context.Consumer>
        {modelState => (<Child {...this.props} {...modelState} />)}
      </context.Consumer>
    }
  }
}

