import { useState } from "react";

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
      <div>
        <h1>statistics</h1>
        good {good}
        <br />
        neutral {neutral}
        <br />
        bad {bad}
        <br />
        all {good + neutral + bad}
        <br />
        average {(good + neutral + bad)/3}
        <br />
        positive {(good * 100)/(good + neutral + bad)}%
      </div>
    </div>
  )
}

export default App