import React from "react"

const Total = ({ parts }) => {
  const sum = parts.reduce((accumulator, part) => {
    return accumulator + part.exercises
  }, 0)
  return (
    <>
      <h3>total of {sum} exercises</h3>
    </>
  )
}

export default Total