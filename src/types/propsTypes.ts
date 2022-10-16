import {
    Question,
    AsyncQuestion,
    AnswersCallbackFunction,
    QuestionPrepared,
    QuizResult,
    PreparedAnswer
} from './';

export interface QuizProps {
    questions: Question[];
    answersCallback: AnswersCallbackFunction;
    height?: string;
    resultsModal?: boolean;
}

export interface AsyncQuizProps {
    questions: AsyncQuestion[];
    checkQuestion: (qid: string, aid: string) => Promise<{
        value: boolean;
        correctValue?: {
            id: string;
            label: string;
        };
    }>;
    answersCallback: AnswersCallbackFunction;
    height?: string;
    resultsModal?: boolean;
}

export interface QuestionProps {
    question: QuestionPrepared | AsyncQuestion;
    answerFunc?: (qid: string, aid: string) => void;
    index: number;
    highlightAnswers?: boolean;
    answers?: PreparedAnswer;
}

export interface QuizResultProps {
    quizResult: QuizResult;
    preparedQuestions: QuestionPrepared[] | AsyncQuestion[];
    handleClose?: () => void;
    showModal?: boolean;
}