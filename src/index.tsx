import * as React from 'react'
import { prepareAnswers, prepareQuestions } from './core/preparators';
import styles from './styles.module.css';
import {
  QuestionPrepared,
  Answer,
  QuizProps,
  QuestionProps,
} from "./types";

export const Quiz = ({ questions, height, answersCallback }: QuizProps) => {

  const [preparedQuestions, setPreparedQuestions] = React.useState<QuestionPrepared[]>([]);

  React.useEffect(() => {
    setPreparedQuestions(prepareQuestions(questions));
  }, [questions])

  const [quizResults, setQuizResults] = React.useState<Answer[]>([]);

  const answer = (id: string, answer: string): boolean => {
    if (quizResults.find(q => q.id === id)) return false;
    setQuizResults([...quizResults, { id, answer }]);
    return true;
  }

  return <div
    className={styles.app}
    style={{ height: height || "30rem" }}
  >
    {preparedQuestions.map((question: QuestionPrepared, index: number) => {
      return <QuestionComponent key={question.id} question={question} answer={answer} index={index} />
    })}
    <button onClick={() => prepareAnswers(quizResults, preparedQuestions, answersCallback)}> Submit </button>
  </div>
}

const QuestionComponent = ({
  question,
  answer,
  index
}: QuestionProps) => {
  const [choosenAnswer, setChoosenAnswer] = React.useState<string | null>(null);

  return <div className={styles.question}>
    <span>{index + 1}. {question.text}</span>
    {question.answers.map((a) => {
      return <div key={a.id} className={styles.answer} >
        <input
          type="checkbox"
          defaultChecked={choosenAnswer === a.id}
          disabled={!!choosenAnswer}
          onClick={() => {
            setChoosenAnswer(a.id);
            answer(question.id, a.id)
          }}
        />
        <label> {a.label}</label>
      </div>
    })}
  </div>
}
