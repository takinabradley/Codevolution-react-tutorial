import React, { useContext } from "react"
import UserContext from "./UserContext"
export default function ComponentF() {
  const userName = useContext(UserContext)
  return <div>{userName}</div>
}
