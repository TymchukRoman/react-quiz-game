import uniqid from 'uniqid';
import {
    Question,
    QuestionPrepared,
    AnswersCallbackFunction,
    Answer,
    PreparedAnswer,
    QuizResult
} from "../types";
import { getScore } from './calculation';

export const prepareQuestions = (questions: Question[]): QuestionPrepared[] => {
    return questions.map((q: Question) => {
        const correctAnswerId = uniqid();

        const answers = q.answers.reduce((acc: string[], a: string) => {
            return acc.includes(a) ? acc : [...acc, a];
        }, []);

        return {
            ...q,
            id: uniqid(),
            answers: answers.map((a) => ({
                id: a === q.correctAnswer ? correctAnswerId : uniqid(),
                label: a
            })),
            correctAnswer: {
                id: correctAnswerId,
                label: q.correctAnswer
            },
            cost: q.cost || 0
        }
    });
}

export const prepareAnswers = (
    answers: Answer[],
    preparedQuestions: QuestionPrepared[],
    answersCallback: AnswersCallbackFunction
): void => {
    const preparedAnswers: PreparedAnswer[] = answers.map((a: Answer) => {
        const q: QuestionPrepared | undefined = preparedQuestions.find((q: QuestionPrepared) => q.id === a.id);
        return {
            text: q?.text,
            correctAnswer: q?.correctAnswer,
            id: q?.id,
            cost: q?.cost,
            answer: a,
            correct: q?.correctAnswer.id === a.answer
        }
    })

    const QuizResult: QuizResult = {
        answers: preparedAnswers,
        score: getScore(preparedAnswers, preparedQuestions)
    }
    answersCallback(QuizResult);
}