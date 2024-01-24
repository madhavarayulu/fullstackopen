import React from "react"
import Part from "./Part.jsx"

const Content = ({ parts }) => {
    return (
      <>
        {parts.map(item =>
          <Part key={item.id} item={item} />
        )}
      </>
    )
}

export default Content