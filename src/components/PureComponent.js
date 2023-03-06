import React from "react"
export default class PureComponent extends React.PureComponent {
  render() {
    /*    doesn't rerender with same props since react knows it's pure
       similar to memo
       pretty much just implements shouldComponentUpdate and shallowly compares
       props by default. The usual default always returns true.
      
       memo doesn't compare new and old state, though. It only compares props.
       Function components that get the same state set already prevent
       re-renders by default, even without memo.
      
       It's a good idea to make sure all children are pure components
       to avoid unexpected behavior and always reflect a new object that
       reflects the new state (?)
      
       Does that mean something like this? 
        this.setState((prevProps, prev) => ({}))
    */
    console.log("PURE RENDER")
    return <div>Pure Component {this.props.name}</div>
  }
}
