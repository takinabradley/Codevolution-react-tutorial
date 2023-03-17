import React, { useState } from "react"
export default function HookCounter4() {
  const [items, setItems] = useState([])
  const addItem = () => {
    setItems((oldItems) => [
      ...oldItems,
      { id: Date.now(), value: oldItems.length }
    ])
  }
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add a number</button>
    </div>
  )
}
