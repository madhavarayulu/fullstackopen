import { React } from "react"
import Header from "./Header.jsx"
import Content from "./Content.jsx"
import Total from "./Total.jsx"

const Course = ({ course }) => {
    return (
      <div>
        <h1>Web development curriculum</h1>
        <Header course={course[0]} />
        <Content parts={course[0].parts} />
        <Total parts={course[0].parts} />
        <Header course={course[1]} />
        <Content parts={course[1].parts} />
        <Total parts={course[1].parts} />
      </div>
    )
}

export default Course