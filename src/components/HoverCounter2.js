import React from "react"
export default class HoverCounter2 extends React.Component {
  render() {
    return (
      <h1 onMouseOver={this.props.incrementCount}>
        Hovered {this.props.count} times
      </h1>
    )
  }
}
