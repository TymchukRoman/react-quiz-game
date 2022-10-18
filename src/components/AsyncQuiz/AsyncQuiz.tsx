import * as React from 'react'
import { QuestionComponent } from '../Question/QuestionComponent';
import { AsyncResultModal } from '../Result/ResultModal';
import { prepareAnswersAsync } from '../../core/preparators';
import styles from './asyncQuiz.module.css';
import {
    Answer,
    QuizResult,
    AsyncQuizProps,
    AsyncQuestion,
} from "../../types";

export const AsyncQuiz = ({
    questions,
    customStyles = {},
    answersCallback,
    resultsModal,
    checkQuestion
}: AsyncQuizProps) => {

    const { height = "400px" } = customStyles;

    const [preparedQuestions, setPreparedQuestions] = React.useState<AsyncQuestion[]>([]);
    const [quizResult, setQuizResult] = React.useState<QuizResult | null>(null);
    const [showResultModal, setShowResultModal] = React.useState<boolean>(false);

    React.useEffect(() => {
        setPreparedQuestions(questions);
    }, [questions])

    const [quizAnswers, setQuizAnswers] = React.useState<Answer[]>([]);

    const answerFunc = (qid: string, aid: string): boolean => {
        if (quizAnswers.find(a => a.qid === qid)) return false;
        setQuizAnswers([...quizAnswers, { qid, aid }]);
        return true;
    }

    return <div
        className={styles.app}
        style={{ height: height || "30rem" }}
    >
        {resultsModal && quizResult && <AsyncResultModal
            quizResult={quizResult}
            preparedQuestions={preparedQuestions}
            showModal={showResultModal}
            handleClose={() => setShowResultModal(false)}
        />}
        {preparedQuestions.map((question: AsyncQuestion, index: number) => {
            return <QuestionComponent key={question.id} question={question} answerFunc={answerFunc} index={index} />
        })}
        <button
            onClick={() => prepareAnswersAsync(
                quizAnswers,
                preparedQuestions,
                answersCallback,
                setQuizResult,
                setShowResultModal,
                checkQuestion
            )}>
            Submit
        </button>
    </div>
}
