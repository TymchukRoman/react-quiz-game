import * as React from 'react';
import styles from './styles.module.css';
import uniqid from 'uniqid';

type AnswersCallbackFunction = (preparedAnswers: PreparedAnswer[]) => void;

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
  correctAnswer: {
    id: string;
    label: string;
  };
  id: string;
  cost?: number;
  answer?: string;
}

interface QuizProps {
  questions: Question[];
  height?: string;
  answersCallback: AnswersCallbackFunction;
}

interface QuestionProps {
  question: QuestionPrepared;
  answer: any;
  index: number;
}

interface Answer {
  id: string;
  answer: string;
}

interface PreparedAnswer {
  text?: string;
  correctAnswer?: {
    id: string;
    label: string;
  };
  id?: string;
  cost?: number;
  answer: Answer,
}

const prepareQuestions = (questions: Question[]): QuestionPrepared[] => {
  return questions.map((q: Question) => {
    const correctAnswerId = uniqid();
    return {
      ...q,
      id: uniqid(),
      answers: q.answers.map((a) => ({
        id: a === q.correctAnswer ? correctAnswerId : uniqid(),
        label: a
      })),
      correctAnswer: {
        id: correctAnswerId,
        label: q.correctAnswer
      }
    }
  })
}

const prepareAnswers = (answers: Answer[], preparedQuestions: QuestionPrepared[], answersCallback: AnswersCallbackFunction) => {
  const preparedAnswers: PreparedAnswer[] = answers.map((a: Answer) => {
    const q: QuestionPrepared | undefined = preparedQuestions.find((q: QuestionPrepared) => q.id === a.id);
    return {
      text: q?.text,
      correctAnswer: q?.correctAnswer,
      id: q?.id,
      cost: q?.cost,
      answer: a,
    }
  })
  answersCallback(preparedAnswers);
}

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
