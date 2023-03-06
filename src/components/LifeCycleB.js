import React from "react"
export default class LifeCycleB extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Brad"
    }
    console.log("LifeCycleB constructor")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps")
    return null
  }

  componentDidMount() {
    console.log("LifeCycleB componentDidMount")
  }

  render() {
    console.log("LifeCycleB render")

    return <div>LifeCycleB</div>
  }
}
