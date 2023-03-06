import React from "react"
export default class Message extends React.Component {
  constructor(props) {
    super()
    this.state = {
      message: "Welcome, visitor!"
    }
  }

  thank() {
    this.setState({
      message: "Thank you!"
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.thank.bind(this)}>Subscribe!</button>
      </div>
    )
  }
}
