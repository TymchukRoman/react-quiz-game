import * as React from 'react';
import { PreparedAnswer, QuestionPrepared, QuizResultProps } from '../../types';
import { QuestionComponent } from '../Question/QuestionComponent';

export const QuizResultComponent = ({
    quizResult,
    preparedQuestions,
    customization
}: QuizResultProps) => {


    return <div>
        <div style={{
            padding: "20px"
        }} >
            {/* <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around"
            }}>
                <span>
                    Total correct answers: {quizResult.score.scoredNumber}
                </span>
                <span>
                    Total score: {quizResult.score.scoredCost}
                </span>
            </div> */}
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around"
            }}>
                <span>
                    Correct answers: {quizResult.score.correctOutOf}({quizResult.score.correctPercentage})
                </span>
                <span>
                    Scored points: {quizResult.score.costOutOf}({quizResult.score.costPercentage})
                </span>
            </div>
        </div>
        <div>
            {preparedQuestions.map((q: QuestionPrepared, index: number) => {
                return <QuestionComponent
                    key={index}
                    index={index}
                    question={q}
                    highlightAnswers
                    answers={quizResult?.answers.find((a: PreparedAnswer) => {
                        return a.id === q.id;
                    })}
                    customization={customization}
                />
            })}
        </div>
    </ div>
}
