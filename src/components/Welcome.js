import React from "react"
export default class Welcome extends React.Component {
  render() {
    const { name, heroName } = this.props
    return (
      <div>
        <h1>
          Hello, {name}, AKA {heroName}
        </h1>
      </div>
    )
  }
}
