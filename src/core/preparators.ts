import uniqid from 'uniqid';
import {
    Question,
    QuestionPrepared,
    AnswersCallbackFunction,
    Answer,
    PreparedAnswer,
    QuizResult,
    AsyncQuestion,
    customStyles
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
    answersCallback: AnswersCallbackFunction,
    setQuizResult: (quizResult: QuizResult) => void,
    setShowResultModal: (value: boolean) => void
): void => {
    const preparedAnswers: PreparedAnswer[] = answers.map((a: Answer) => {
        const q: QuestionPrepared | undefined = preparedQuestions.find((q: QuestionPrepared) => q.id === a.qid);
        return {
            text: q?.text,
            correctAnswer: q?.correctAnswer,
            id: q?.id,
            cost: q?.cost,
            answer: a,
            correct: q?.correctAnswer?.id === a.aid
        }
    })

    const QuizResult: QuizResult = {
        answers: preparedAnswers,
        score: getScore(preparedAnswers, preparedQuestions)
    }

    setQuizResult(QuizResult);
    setShowResultModal(true);
    answersCallback(QuizResult);
}

export const prepareAnswersAsync = async (
    answers: Answer[],
    preparedQuestions: AsyncQuestion[],
    answersCallback: AnswersCallbackFunction,
    setQuizResult: (quizResult: QuizResult) => void,
    setShowResultModal: (value: boolean) => void,
    checkQuestion: (qid: string, aid: string) => Promise<{
        value: boolean;
        correctValue?: {
            id: string;
            label: string;
        };
    }>
) => {
    const preparedAnswers = await Promise.all(
        answers.map(async (a: Answer) => {
            return new Promise(async (resolve) => {
                const q: AsyncQuestion | undefined = preparedQuestions.find((q: AsyncQuestion) => q.id === a.qid);

                const isCorrect = q?.id ? await checkQuestion(a.aid, q?.id) : { value: false };

                resolve({
                    text: q?.text,
                    correctAnswer: isCorrect.correctValue || undefined,
                    id: q?.id,
                    cost: q?.cost,
                    answer: a,
                    correct: isCorrect.value
                })
            })

        })
    )

    const updatedQuestions: QuestionPrepared[] = preparedQuestions.map((q) => {
        return {
            text: q.text,
            answers: q.answers,
            id: q.id,
            cost: q.cost || 0
        }
    })

    const QuizResult: QuizResult = {
        answers: preparedAnswers as PreparedAnswer[],
        score: getScore(preparedAnswers as PreparedAnswer[], updatedQuestions)
    }

    setQuizResult(QuizResult);
    setShowResultModal(true);
    answersCallback(QuizResult);
}

export const prepareStyles = (customStyles: customStyles) => {
    const {
        height = "400px",
        backgroundColor = "white",
        fontFamily = "Verdana, Arial, Helvetica, sans-serif",
        textColor = "black",
        disableNumbers = false,
    } = customStyles;

    return {
        height,
        backgroundColor,
        fontFamily,
        textColor,
        disableNumbers
    }
}