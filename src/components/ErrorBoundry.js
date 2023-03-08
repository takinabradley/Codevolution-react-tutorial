import React from "react"
export default class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>
    }
    return this.props.children
  }

  // error boundries catch errors in lifecycle methods, rendering, and
  // constructors of the whole tree below them
  // they do not catch errors in event handlers, however.
  static getDerivedStateFromError(err) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }
}
