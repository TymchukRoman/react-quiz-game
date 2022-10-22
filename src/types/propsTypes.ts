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
    customStyles?: customStyles;
    quizType?: string;
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
    customization: customStyles;
    quizType?: string | undefined;
    selectedQuestion?: number;
    setSelectedQuestion?: any;
}

export interface QuizResultProps {
    quizResult: QuizResult;
    preparedQuestions: QuestionPrepared[];
    handleClose?: () => void;
    showModal?: boolean;
    customization: customStyles;
}


export interface AsyncQuizResultProps {
    quizResult: QuizResult;
    preparedQuestions: AsyncQuestion[];
    handleClose?: () => void;
    showModal?: boolean;
    customization: customStyles;
}