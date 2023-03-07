import React from "react"
export default class RefsDemo extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.cbRef = null
    this.setCallbackRef = (elem) => (this.cbRef = elem)
  }

  clickHandler = (e) => {
    console.log("ref", this.inputRef.current.value)
    console.log("cbRef", this.cbRef.value)
  }

  componentDidMount() {
    this.inputRef.current.focus()
    if (this.cbRef) {
      this.cbRef.focus()
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCallbackRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
