import React from "react"
export default class User extends React.Component {
  render() {
    return <div>{this.props.render(true)}</div>
  }
}
