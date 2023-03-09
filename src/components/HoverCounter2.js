import React from "react"
export default class HoverCounter2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  incrementCount = (e) => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  render() {
    return (
      <h1 onMouseOver={this.incrementCount}>
        Hovered {this.state.count} times
      </h1>
    )
  }
}
