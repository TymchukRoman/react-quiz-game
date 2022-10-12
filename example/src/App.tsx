import React from 'react'

import { Quiz } from 'react-quiz-game'
import 'react-quiz-game/dist/index.css'

const App = () => {
  return <Quiz questions={[
    {
      text: "2 + 4",
      answers: ["4", "6", "9", "10"],
      correctAnswer: "6",
    }
  ]} />
}

export default App
