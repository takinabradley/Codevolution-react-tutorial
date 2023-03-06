import React from "react"
import PureComponent from "./PureComponent"
import RegularComponent from "./RegularComponent"
export default class ParentComp extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: "Brad"
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => ({ name: "Brad" }))
    }, 2000)
  }

  render() {
    console.log("PARENT RENDER")
    return (
      <div>
        Parent Component
        <RegularComponent name={this.state.name} />
        <PureComponent name={this.state.name} />
      </div>
    )
  }
}
