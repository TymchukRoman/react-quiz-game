# react-quiz-game 

> Beta version

[![NPM](https://img.shields.io/npm/v/react-quiz-game.svg)](https://www.npmjs.com/package/react-quiz-game) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-quiz-game
```

## Usage

```tsx
import { Quiz } from 'react-quiz-game'

const questions = [
  {
    text: "2 + 4",
    answers: ["4", "6", "9", "10"],
    correctAnswer: "6",
  },
  {
    text: "3 + 2",
    answers: ["3", "5", "2", "1"],
    correctAnswer: "5",
  }
];

class Example extends Component {
  render() {
    return <Quiz 
      questions={questions}
      answersCallback={(quizResult) => { 'Your code here' }
    />
  }
}
```

## Async Quiz

```tsx
import { AsyncQuiz } from 'react-quiz-game'

const questions = [
  {
    id: "1",
    text: "2 + 4",
    answers: [
      { id: "6", label: "6" },
      { id: "2", label: "2" },
      { id: "1", label: "1" },
      { id: "-2", label: "-2" }
    ],
  },
  {
    id: "2",
    text: "10 - 7",
    answers: [
      { id: "3", label: "3" },
      { id: "2", label: "2" },
      { id: "17", label: "17" },
      { id: "0", label: "0" }
    ],
  }
];

const checkAnswer = async (aid, qid) => { //aid - answer id, qid = question id
    return await fetchResult(aid, qid);
    // { 
    //   value: true || false, 
    //   correctValue: { id, label } (optional)
    // }
  }

class Example extends Component {
  render() {
    return <AsyncQuiz 
      questions={questions}
      answersCallback={(quizResult) => { 'Your code here' }
      checkQuestion={checkAnswer}
    />
  }
}
```

## License

MIT © [TymchukRoman](https://github.com/TymchukRoman)
