import * as React from 'react'
import { QuestionComponent } from './components/Question/QuestionComponent';
import { ResultModal } from './components/Result/ResultModal';
import { prepareAnswers, prepareQuestions } from './core/preparators';
import styles from './styles.module.css';
import {
  QuestionPrepared,
  Answer,
  QuizProps,
  QuizResult,
} from "./types";

export const Quiz = ({ questions, height, answersCallback, resultsModal }: QuizProps) => {

  const [preparedQuestions, setPreparedQuestions] = React.useState<QuestionPrepared[]>([]);
  const [quizResult, setQuizResult] = React.useState<QuizResult | null>(null);
  const [showResultModal, setShowResultModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    setPreparedQuestions(prepareQuestions(questions));
  }, [questions])

  const [quizResults, setQuizResults] = React.useState<Answer[]>([]);

  const answerFunc = (id: string, answer: string): boolean => {
    if (quizResults.find(q => q.id === id)) return false;
    setQuizResults([...quizResults, { id, answer }]);
    return true;
  }

  return <div
    className={styles.app}
    style={{ height: height || "30rem" }}
  >
    {resultsModal && quizResult && <ResultModal
      quizResult={quizResult}
      preparedQuestions={preparedQuestions}
      showModal={showResultModal}
      handleClose={() => setShowResultModal(false)}
    />}
    {preparedQuestions.map((question: QuestionPrepared, index: number) => {
      return <QuestionComponent key={question.id} question={question} answerFunc={answerFunc} index={index} />
    })}
    <button
      onClick={() => prepareAnswers(
        quizResults,
        preparedQuestions,
        answersCallback,
        setQuizResult,
        setShowResultModal
      )}>
      Submit
    </button>
  </div>
}
