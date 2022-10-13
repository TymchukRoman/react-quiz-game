import React from 'react'

import { Quiz } from 'react-quiz-game'
import 'react-quiz-game/index.css'

const App = () => {

  const getResult = (answers: any) => {
    console.log(answers)
  }

  return <Quiz questions={[
    {
      text: "2 + 4",
      answers: ["4", "6", "9", "10"],
      correctAnswer: "6",
    },
    {
      text: "3 + 2",
      answers: ["3", "5", "2", "1"],
      correctAnswer: "5",
    },
    {
      text: "1 + 7",
      answers: ["9", "6", "5", "8"],
      correctAnswer: "8",
    },
    {
      text: "6 + 1",
      answers: ["1", "7", "4", "0"],
      correctAnswer: "7",
    },
    {
      text: "8 + 2",
      answers: ["10", "4", "8", "2"],
      correctAnswer: "10",
    }
  ]}
    answersCallback={getResult} />
}

export default App
