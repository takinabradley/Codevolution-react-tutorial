import React from "react"
export default class UserGreeting extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    const message = this.state.isLoggedIn ? "Welcome Brad!" : "Welcome Guest!"
    return (
      <div>
        <div>{message}</div>
      </div>
    )
  }
}
