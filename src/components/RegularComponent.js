import React from "react"
export default class RegularComponent extends React.Component {
  render() {
    console.log("REGULAR RENDER")
    return <div>Regular Component {this.props.name}</div>
  }
}
