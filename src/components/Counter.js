import React from "react"
export default class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  increment() {
    /* this.setState(
      {
        count: this.state.count + 1
      },
      () => console.log("callback:", this.state.count)
    ) */
    this.setState(
      // insures the value of the last setState call is being used
      // instead of the current one
      (prevState) => ({ count: prevState.count + 1 }),

      // callback to do tasks only after state is set
      () => console.log("callback:", this.state.count)
    )

    // logs before async setStaet
    console.log("before callback:", this.state.count)
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.incrementFive.bind(this)}>Increment!</button>
      </div>
    )
  }
}
