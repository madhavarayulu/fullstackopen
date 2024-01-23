import { useState } from "react";

const Statistics = (props) => {
  console.log(props)
  return (
    <div>
        <h1>statistics</h1>
        good {props.good}
        <br />
        neutral {props.neutral}
        <br />
        bad {props.bad}
        <br />
        all {props.good + props.neutral + props.bad}
        <br />
        average {(props.good + props.neutral + props.bad)/3}
        <br />
        positive {(props.good * 100)/(props.good + props.neutral + props.bad)}%
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
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App