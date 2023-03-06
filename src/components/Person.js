import React from "react"
export default function Person({ personData }) {
  return (
    <div>
      I am {personData.name}. I am {personData.age}. I know {personData.skill}
    </div>
  )
}
