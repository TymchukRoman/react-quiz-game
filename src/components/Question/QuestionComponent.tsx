import * as React from 'react';
import { QuestionProps } from '../../types';
import styles from './question.module.css';

export const QuestionComponent = ({
    question,
    answerFunc,
    index,
    highlightAnswers,
    answers
}: QuestionProps) => {
    const [choosenAnswer, setChoosenAnswer] = React.useState<string | null>(null);

    return <div className={styles.question}>
        <span>{index + 1}. {question.text}</span>
        {question.answers.map((a) => {
            return <div
                key={a.id}
                className={styles.answer}
                style={{
                    color: highlightAnswers && answers?.correctAnswer?.id === a.id
                        ? "green"
                        : answers?.answer.answer === a.id
                            ? "red"
                            : "black",
                    fontWeight: highlightAnswers && answers?.correctAnswer?.id === a.id
                        ? "normal"
                        : answers?.answer.answer === a.id
                            ? "normal"
                            : "lighter"
                }}>
                <input
                    type="checkbox"
                    defaultChecked={choosenAnswer === a.id || answers?.answer.answer === a.id}
                    disabled={highlightAnswers || !!choosenAnswer}
                    onClick={() => {
                        setChoosenAnswer(a.id);
                        answerFunc?.(question.id, a.id);
                    }}
                />
                <label> {a.label}</label>
            </div>
        })}
    </div>
}