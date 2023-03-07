import React from "react"
import Input from "./Input"
export default class FocusInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.componentRef = React.createRef()
  }

  clickHandler = (e) => {
    // this is COOL
    console.log(this.componentRef)
    this.componentRef.current.focusInput()
  }

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}
