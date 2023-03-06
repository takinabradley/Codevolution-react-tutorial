import React from "react"
import "./Stylesheet.css"
export default function Stylesheet({ primary }) {
  const className = primary ? "primary" : ""
  return <h1 className={`${className} font-xl`}>Stylesheet</h1>
}
