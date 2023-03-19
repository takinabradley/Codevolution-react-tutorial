import React, { useState } from "react"
import useInput from "../hooks/useInput"
export default function UserForm() {
  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")

  const [firstName, bindFirstName, resetFirstName] = useInput("")
  const [lastName, bindLastName, resetLastName] = useInput("")
  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="first-name">First Name</label>
        <input type="text" name="first-name" {...bindFirstName} />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" name="last-name" {...bindLastName} />
      </div>
      <button>Submit</button>
    </form>
  )
}
