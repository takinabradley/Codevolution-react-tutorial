import React from "react"
export default class ClickCounter2 extends React.Component {
  render() {
    return (
      <button onClick={this.props.incrementCount}>
        Clicked {this.props.count} times
      </button>
    )
  }
}
