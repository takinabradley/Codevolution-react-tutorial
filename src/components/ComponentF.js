import React, { useContext } from "react"
import UserContext from "./userContext"
/* export default class ComponentF extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {(userName) => <div>Hello, {userName}</div>}
      </UserContext.Consumer>
    )
  }
} */

export default function ComponentF() {
  const userName = useContext(UserContext)
  return <div>{userName}</div>
}
