import React from "react"
import LifeCycleB from "./LifeCycleB"
export default class LifeCycleA extends React.Component {
  constructor(props) {
    // called when the component is mounted to set the state, and typically
    // used to bind events as well.
    super(props)
    this.state = {
      name: "Brad",
      showB: true
    }
    console.log("LifeCycleA constructor")
  }

  changeState = (e) => {
    this.setState({
      name: "changed!"
    })
  }

  toggleB = (e) => {
    const bState = !this.state.showB
    console.log(bState)
    this.setState({
      showB: bState
    })
  }

  static getDerivedStateFromProps(props, state) {
    // called every time a component is re-rendered
    // used when the state depends on the props passed into the component
    // returns state object (?)
    console.log("LifeCycleA getDerivedStateFromProps")
    return null
  }

  componentDidMount() {
    // called once after a component mounted
    // good for causing side effects in DOM, and making requests
    console.log("LifeCycleA componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifeCycleA shouldComponentUpdate")
    // decides if component should rerender or not (true or false)
    // can be used as a performance optimazation
    // rarely used
    // should avoid side effects and changing state
    return true
  }

  render() {
    // called every time the component needs to re-render due to new state,
    // props, or due to being mounted

    // reads props and state and returns JSX
    // shouldn't try to mutate props or state
    console.log("LifeCycleA render")

    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <button onClick={this.toggleB}>Unmount B</button>
        {this.state.showB && <LifeCycleB />}
      </div>
    )
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate")
    // called right before changes in virtual dom are to be reflected in the DOM
    // capture some info from the DOM, like scroll position to maintain it.
    // can return null or a value. The value will be passed as the third
    // parameter to componentDidUpdate
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifeCycleA componentDidUpdate")
    // called after the render is finished in the re-render cycles
    // is guaraunteed to only be called once in a re-render cycle
    //
    // can use to cause side effects like requests depending on previous props
    // or state.
  }
}
