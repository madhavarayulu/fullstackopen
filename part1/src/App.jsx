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
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
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