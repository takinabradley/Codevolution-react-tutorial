import React, { createRef } from "react"
import FRInput from "./FRInput"
export default class FRParentInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.inputRef = createRef()
  }

  focusInputRef = () => {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <FRInput ref={this.inputRef} />
        {/* THIS IS COOL TOO, I DON'T KNOW HOW MUCH MORE USEFUL IT IS THAN 
        CALLBACKS THOUGH */}
        <button onClick={this.focusInputRef}>Focus Input</button>
      </div>
    )
  }
}
