import React from "react"
import withCounter from "./withCounter"

class ClickCounter extends React.Component {
  render() {
    console.log(this.props.name)
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          {this.props.name}
          Clicked {this.props.count} Times
        </button>
      </div>
    )
  }
}

export default withCounter(ClickCounter, 5)
