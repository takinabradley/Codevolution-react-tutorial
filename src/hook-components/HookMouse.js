import React from "react"
import { useState, useEffect } from "react"

export default function HookMouse() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const logMousePosition = (e) => setCoords({ x: e.clientX, y: e.clientY })
  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition)
  }, [])

  return (
    <div>
      MousePosition: {coords.x} - {coords.y}{" "}
    </div>
  )
}
