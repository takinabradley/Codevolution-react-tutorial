import React, { useState } from "react"
export default function HookCounter3() {
  const [name, setName] = useState({ firstName: "", lastName: "" })

  return (
    <form action="">
      <div>
        <input
          type="text"
          name="firstName"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </div>

      <h2>Your first name is: {name.firstName}</h2>
      <h2>Your last name is: {name.lastName}</h2>
    </form>
  )
}
