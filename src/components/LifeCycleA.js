import React from "react"
import LifeCycleB from "./LifeCycleB"
export default class LifeCycleA extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Brad"
    }
    console.log("LifeCycleA constructor")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps")
    return null
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount")
  }

  render() {
    console.log("LifeCycleA render")

    return (
      <div>
        <div>LifeCycleA</div>
        <LifeCycleB />
      </div>
    )
  }
}
