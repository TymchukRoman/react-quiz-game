import * as React from 'react'
import { QuestionComponent } from '../Question/QuestionComponent';
import { AsyncResultModal } from '../Result/ResultModal';
import { prepareAnswersAsync, prepareStyles } from '../../core/preparators';
import styles from './asyncQuiz.module.css';
import {
    Answer,
    QuizResult,
    AsyncQuizProps,
    AsyncQuestion,
    customStyles,
} from "../../types";

export const AsyncQuiz = ({
    questions,
    customStyles = {},
    answersCallback,
    resultsModal,
    checkQuestion
}: AsyncQuizProps) => {

    const customization: customStyles = prepareStyles(customStyles);

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
        style={{
            height: customization.height,
            fontFamily: customization.fontFamily,
            color: customization.textColor,
            backgroundColor: customization.backgroundColor
        }}
    >
        {resultsModal && quizResult && <AsyncResultModal
            quizResult={quizResult}
            preparedQuestions={preparedQuestions}
            showModal={showResultModal}
            handleClose={() => setShowResultModal(false)}
            customization={customization}
        />}

        {preparedQuestions.map((question: AsyncQuestion, index: number) => {
            return <QuestionComponent
                key={question.id}
                question={question}
                answerFunc={answerFunc}
                index={index}
                customization={customization}
            />
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
