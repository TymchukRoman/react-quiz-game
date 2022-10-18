import {
    Question,
    AsyncQuestion,
    AnswersCallbackFunction,
    QuestionPrepared,
    QuizResult,
    PreparedAnswer,
    customStyles
} from './';

interface MainQuizProps {
    resultsModal?: boolean;
    answersCallback: AnswersCallbackFunction;
    customStyles?: customStyles
}

export interface QuizProps extends MainQuizProps {
    questions: Question[];
}

export interface AsyncQuizProps extends MainQuizProps {
    questions: AsyncQuestion[];
    checkQuestion: (qid: string, aid: string) => Promise<{
        value: boolean;
        correctValue?: {
            id: string;
            label: string;
        };
    }>;
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
    preparedQuestions: QuestionPrepared[];
    handleClose?: () => void;
    showModal?: boolean;
}


export interface AsyncQuizResultProps {
    quizResult: QuizResult;
    preparedQuestions: AsyncQuestion[];
    handleClose?: () => void;
    showModal?: boolean;
}