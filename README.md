# react-quiz-game (DEVELOPING)

> This package is under developing

[![NPM](https://img.shields.io/npm/v/react-quiz-game.svg)](https://www.npmjs.com/package/react-quiz-game) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-quiz-game
```

## Usage

```tsx
import React, { Component } from 'react'

import { Quiz } from 'react-quiz-game'
import 'react-quiz-game/dist/index.css'

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

## License

MIT © [TymchukRoman](https://github.com/TymchukRoman)
