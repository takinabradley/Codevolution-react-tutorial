import React from "react"
import withCounter from "./withCounter"

class HoverCounter extends React.Component {
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.incrementCount}>
          Hovered {this.props.count} times
        </h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter, 10)
