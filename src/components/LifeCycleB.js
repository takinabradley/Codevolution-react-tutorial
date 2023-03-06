import React from "react"
export default class LifeCycleB extends React.Component {
  constructor(props) {
    // called when the component is mounted to set the state, and typically
    // used to bind events as well.
    super(props)
    this.state = {
      name: "Brad"
    }
    console.log("LifeCycleB constructor")
  }

  static getDerivedStateFromProps(props, state) {
    // called every time a component is re-rendered
    // used when the state depends on the props passed into the component
    // returns state object (?)
    console.log("LifeCycleB getDerivedStateFromProps")
    return null
  }

  componentDidMount() {
    // called once after a component mounted
    // good for causing side effects in DOM, and making requests
    console.log("LifeCycleB componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifeCycleB shouldComponentUpdate")
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
    console.log("LifeCycleB render")

    return (
      <div>
        <div>LifeCycleB</div>
      </div>
    )
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapshotBeforeUpdate")
    // called right before changes in virtual dom are to be reflected in the DOM
    // capture some info from the DOM, like scroll position to maintain it.
    // can return null or a value. The value will be passed as the third
    // parameter to componentDidUpdate
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifeCycleB componentDidUpdate")
    // called after the render is finished in the re-render cycles
    // is guaraunteed to only be called once in a re-render cycle
    //
    // can use to cause side effects like requests depending on previous props
    // or state.
  }

  componentWillUnmount() {
    console.log("LifecycleB componentWillUnmount")
    // cleanup network requests, event handlers, subscriptions, timers, etc
    // before unmounting
  }

  static getDerivedStateFromError(error) {}

  componentDidCatch(error, info) {}
}
