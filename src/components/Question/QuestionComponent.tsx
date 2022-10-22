import * as React from 'react';
import { quizTypes } from '../../constants/quizTypes';
import { QuestionProps } from '../../types';
import styles from './question.module.css';

export const QuestionComponent = ({
    question,
    answerFunc,
    index,
    highlightAnswers,
    answers,
    customization,
    quizType,
    selectedQuestion,
    setSelectedQuestion,
}: QuestionProps) => {
    const [choosenAnswer, setChoosenAnswer] = React.useState<string | null>(null);

    const answerQuestion = (qid: string, aid: string) => {
        setChoosenAnswer(aid);
        answerFunc?.(qid, aid);
        setSelectedQuestion(index + 1);
    }

    return <div className={styles.question}>
        {((quizType === quizTypes.CONSISTENT && index === selectedQuestion) || (quizType === quizTypes.INLINE || !quizType)) &&
            <div>
                <span>{customization.disableNumbers ? "" : `${index + 1}. `}{question.text}</span>
                {question.answers.map((a) => {
                    return <div
                        key={a.id}
                        className={styles.answer}
                        style={{
                            color: (highlightAnswers && answers?.correctAnswer?.id === a.id) || (answers?.correct && a.id === answers.answer.aid)
                                ? "green"
                                : answers?.answer.aid === a.id
                                    ? "red"
                                    : "black",
                            fontWeight: (highlightAnswers && answers?.correctAnswer?.id === a.id) || (answers?.correct && a.id === answers.answer.aid)
                                ? "normal"
                                : answers?.answer.aid === a.id
                                    ? "normal"
                                    : "lighter"
                        }}>
                        <input
                            type="checkbox"
                            defaultChecked={choosenAnswer === a.id || answers?.answer.aid === a.id}
                            disabled={highlightAnswers || !!choosenAnswer}
                            onClick={() => answerQuestion(question.id, a.id)}
                        />
                        <label> {a.label}</label>
                    </div>
                })}

                {quizType === quizTypes.CONSISTENT
                    && <button onClick={() => setSelectedQuestion(index + 1)} >
                        next
                    </button>
                }
                {quizType === quizTypes.CONSISTENT && index > 0
                    && <button onClick={() => setSelectedQuestion(index - 1)} >
                        previos
                    </button>
                }
            </div>
        }
    </div >
}