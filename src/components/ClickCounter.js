import React from "react"
export default class ClickCounter extends React.Component {
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
      <div>
        <button onClick={this.incrementCount}>
          Clicked {this.state.count} Times
        </button>
      </div>
    )
  }
}
