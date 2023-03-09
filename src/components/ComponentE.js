import React from "react"
import ComponentF from "./ComponentF"
import UserContext from "./userContext"
export default class ComponentE extends React.Component {
  static contextType = UserContext

  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    )
  }
}

// this is how you'd do it without static fields
// using context either way is limited to a single context and to class
// components
ComponentE.contextType = UserContext
