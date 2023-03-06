import React from "react"
export default class ClassClick extends React.Component {
  clickHandler(e) {
    console.log(e)
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me!</button>
      </div>
    )
  }
}
