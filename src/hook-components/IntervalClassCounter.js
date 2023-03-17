import React from "react"
export default class IntervalClassCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return <div>{this.state.count}</div>
  }
}
