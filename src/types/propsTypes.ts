import {
    Question,
    AnswersCallbackFunction,
    QuestionPrepared,
    QuizResult,
    PreparedAnswer
} from './';

export interface QuizProps {
    questions: Question[];
    height?: string;
    answersCallback: AnswersCallbackFunction;
    resultsModal?: boolean;
}

export interface QuestionProps {
    question: QuestionPrepared;
    answerFunc?: (qid: string, aid: string) => void;
    index: number;
    highlightAnswers?: boolean;
    answers?: PreparedAnswer;
}

export interface QuizResultProps {
    quizResult: QuizResult;
    preparedQuestions: QuestionPrepared[];
    handleClose?: () => void;
    showModal?: boolean;
}