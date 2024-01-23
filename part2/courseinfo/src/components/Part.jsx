import { React } from "react"

const Part = ({ item }) => {
    return (
      <>
        <p>{item.name} {item.exercises}</p>
      </>
    )
}

export default Part