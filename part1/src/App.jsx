import { useState } from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      {props.text} {props.value}
    </>
  )
}

const Statistics = (props) => {
  console.log(props)
  const totalFeedbacks = props.good + props.neutral + props.bad
  const averageFeedbacks = (props.good + props.neutral + props.bad)/3
  const positivePercentage = (props.good * 100)/(props.good + props.neutral + props.bad) + "%"
  
  if (props.good === 0 && props.neutral === 0 && props.bad ===0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text="good" /></td>
            <td><StatisticLine value={props.good} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="neutral" /></td>
            <td><StatisticLine value={props.neutral} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="bad"  /></td>
            <td><StatisticLine value={props.bad} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="all" /></td>
            <td><StatisticLine value={totalFeedbacks} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="average" /></td>
            <td><StatisticLine value={averageFeedbacks} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="positive" /></td>
            <td><StatisticLine value={positivePercentage} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random()*(anecdotes.length)))
  }

  const handleVote = () => {
    setVotes((prevVotes) => {
      const newVotes = [...prevVotes]
      newVotes[selected] += 1
      return newVotes
    })
  }

  return (
    <div>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleAnecdote}>next anecdote</button>
      {console.log(votes)}
      {console.log(selected)}

      <h1>give feedback</h1>
      <div style={{ display: "flex" }}>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App