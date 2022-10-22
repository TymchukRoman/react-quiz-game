import * as React from 'react'
import { QuestionComponent } from '../Question/QuestionComponent';
import { ResultModal } from '../Result/ResultModal';
import { prepareAnswers, prepareQuestions, prepareStyles } from '../../core/preparators';
import styles from './quiz.module.css';
import {
    QuestionPrepared,
    Answer,
    QuizProps,
    QuizResult,
    customStyles,
} from "../../types";

export const Quiz = ({
    questions,
    customStyles = {},
    answersCallback,
    resultsModal,
    quizType
}: QuizProps) => {

    const customization: customStyles = prepareStyles(customStyles);

    const [preparedQuestions, setPreparedQuestions] = React.useState<QuestionPrepared[]>([]);
    const [quizResult, setQuizResult] = React.useState<QuizResult | null>(null);
    const [showResultModal, setShowResultModal] = React.useState<boolean>(false);
    const [selectedQuestion, setSelectedQuestion] = React.useState<number>(0);

    React.useEffect(() => {
        setPreparedQuestions(prepareQuestions(questions));
    }, [questions])

    const [quizAnswers, setQuizAnswers] = React.useState<Answer[]>([]);

    const answerFunc = (qid: string, aid: string): boolean => {
        if (quizAnswers.find(a => a.qid === aid)) return false;
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
        {resultsModal && quizResult && <ResultModal
            quizResult={quizResult}
            preparedQuestions={preparedQuestions}
            showModal={showResultModal}
            handleClose={() => setShowResultModal(false)}
            customization={customization}
        />}
        {preparedQuestions.map((question: QuestionPrepared, index: number) => {
            return <QuestionComponent
                key={question.id}
                question={question}
                answerFunc={answerFunc}
                index={index}
                customization={customization}
                quizType={quizType}
                selectedQuestion={selectedQuestion}
                setSelectedQuestion={setSelectedQuestion}
            />
        })}
        <button
            onClick={() => prepareAnswers(
                quizAnswers,
                preparedQuestions,
                answersCallback,
                setQuizResult,
                setShowResultModal
            )}>
            Submit
        </button>
    </div>
}
