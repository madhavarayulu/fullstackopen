const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'

  return (
    <div>
      <Part part={part1} exercises={props.exercises1} />
      <Part part={part2} exercises={props.exercises2} />
      <Part part={part3} exercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.totalExercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const totalExercises = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />
      <Content exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total totalExercises={totalExercises} />
    </div>
  )
}

export default App