import React from "react"
import { useState, useEffect } from "react"

export default function HookMouse() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const logMousePosition = (e) => {
    console.log("ha!")
    setCoords({ x: e.clientX, y: e.clientY })
  }

  const cleanupWindowListener = () =>
    window.removeEventListener("mousemove", logMousePosition)

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition)
    return cleanupWindowListener
  }, [])

  return (
    <div>
      MousePosition: {coords.x} - {coords.y}{" "}
    </div>
  )
}
