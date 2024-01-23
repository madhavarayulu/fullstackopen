
const Header = ({ course }) => <h1>{course.name}</h1>

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(item =>
        <Part key={item.id} item={item} />
      )}
    </>
  )
}

const Part = ({ item }) => {
  return (
    <>
      <p>{item.name} {item.exercises}</p>
    </>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App