import React from "react"
import ChildComponent from "./ChildComponent"
export default class ParentComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      parentName: "Parent"
    }
  }

  greetHandler = (name) => {
    alert(`Hello, ${name}`)
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetHandler} />
      </div>
    )
  }
}
