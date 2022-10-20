import React from 'react'

// import { Quiz } from 'react-quiz-game'
import { AsyncQuiz } from 'react-quiz-game'
import 'react-quiz-game/index.css'

const App = () => {

  const asyncAnswers = [
    { qid: "1", aid: "6" },
    { qid: "2", aid: "6" },
    { qid: "3", aid: "6" },
    { qid: "4", aid: "6" }
  ]


  const checkAnswer = (aid: string, qid: string): Promise<{
    value: boolean;
    correctValue?: {
      id: string;
      label: string;
    };
  }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isCorrect = asyncAnswers.find((a) => {
          return a.qid === qid;
        })
        resolve({
          value: isCorrect?.aid === aid,
        })
      }, 500)
    })
  }

  const getResult = (quizResult: any) => {
    console.log(quizResult)
  }

  // return <Quiz questions={[
  //   {
  //     text: "2 + 4",
  //     answers: ["4", "6", "9", "10"],
  //     correctAnswer: "6",
  //   },
  //   {
  //     text: "3 + 2",
  //     answers: ["3", "5", "2", "1"],
  //     correctAnswer: "5",
  //   },
  //   {
  //     text: "1 + 7",
  //     answers: ["9", "6", "5", "8"],
  //     correctAnswer: "8",
  //   },
  //   {
  //     text: "6 + 1",
  //     answers: ["1", "7", "4", "0"],
  //     correctAnswer: "7",
  //   },
  //   {
  //     text: "8 + 2",
  //     answers: ["10", "4", "8", "2"],
  //     correctAnswer: "10",
  //   }
  // ]}
  //   answersCallback={getResult}
  //   resultsModal={true}
  // />

  return <AsyncQuiz questions={[
    {
      id: "1",
      text: "2 + 4",
      answers: [{
        id: "6",
        label: "6"
      },
      {
        id: "2",
        label: "2"
      },
      {
        id: "1",
        label: "1"
      },
      {
        id: "-2",
        label: "-2"
      }],
      cost: 10
    },
    {
      id: "2",
      text: "2 + 4",
      answers: [{
        id: "6",
        label: "6"
      },
      {
        id: "2",
        label: "2"
      },
      {
        id: "1",
        label: "1"
      },
      {
        id: "-2",
        label: "-2"
      }],
      cost: 10
    },
    {
      id: "3",
      text: "2 + 4",
      answers: [{
        id: "6",
        label: "6"
      },
      {
        id: "2",
        label: "2"
      },
      {
        id: "1",
        label: "1"
      },
      {
        id: "-2",
        label: "-2"
      }],
      cost: 10
    },
    {
      id: "4",
      text: "2 + 4",
      answers: [{
        id: "6",
        label: "6"
      },
      {
        id: "2",
        label: "2"
      },
      {
        id: "1",
        label: "1"
      },
      {
        id: "-2",
        label: "-2"
      }],
      cost: 15
    },
  ]}
    answersCallback={getResult}
    resultsModal={true}
    checkQuestion={checkAnswer}
    customStyles={{
      height: "400px",
      // textColor: "red",
      // disableNumbers: true
    }}
  />
}

export default App
