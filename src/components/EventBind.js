import React from "react"
export default class EventBind extends React.Component {
  constructor() {
    super()

    this.state = {
      message: "Hello"
    }
  }

  clickHandler = (e) => {
    this.setState({
      message: "Goodbye"
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}
