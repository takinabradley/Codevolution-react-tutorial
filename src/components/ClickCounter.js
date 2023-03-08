import React from "react"
import withCounter from "./withCounter"

class ClickCounter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          Clicked {this.props.count} Times
        </button>
      </div>
    )
  }
}

export default withCounter(ClickCounter)
