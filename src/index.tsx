import * as React from 'react';
import styles from './styles.module.css';
import uniqid from 'uniqid';

interface Question {
  text: string;
  answers: string[];
  correctAnswer: string;
  id?: string;
  cost?: number;
  answer?: string;
}

interface QuestionPrepared {
  text: string;
  answers: {
    id: string;
    label: string;
  }[];
  correctAnswer: { id: string; label: string; };
  id?: string;
  cost?: number;
  answer?: string;
}

interface Props {
  questions: Question[];
  height?: string;
}

const prepareQuestions = (questions: Question[]): QuestionPrepared[] => {
  return questions.map(q => ({
    ...q,
    id: uniqid(),
    answers: q.answers.map((a) => ({
      id: a === q.correctAnswer ? "1" : uniqid(),
      label: a
    })),
    correctAnswer: {
      id: "1",
      label: q.correctAnswer
    }
  }))
}

export const Quiz = ({ questions, height }: Props) => {

  const preparedQuestions: QuestionPrepared[] = prepareQuestions(questions);

  const [quizResults, setQuizResults] = React.useState<{ id: string; answer: string }[]>([]);

  const answer = (id: string, answer: string): boolean => {
    if (quizResults.find(q => q.id === id)) return false;
    setQuizResults([...quizResults, { id, answer }]);
    return true;
  }

  return <div
    className={styles.test}
    style={{ height: height || "30rem" }}
  >
    {JSON.stringify(quizResults)}
    {preparedQuestions.map((question: QuestionPrepared) => {
      return <QuestionComponent question={question} answer={answer} />
    })}
  </div>
}

const QuestionComponent = ({
  question,
  answer
}: {
  question: QuestionPrepared;
  answer: any
}) => {
  return <div>
    <span>{question.text}</span>
    {question.answers.map((a) => {
      return <button onClick={() => answer(question.id, a.id)}>{a.label}</button>
    })}
  </div>
}
