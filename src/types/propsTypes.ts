import {
    Question,
    AnswersCallbackFunction,
    QuestionPrepared
} from './';

export interface QuizProps {
    questions: Question[];
    height?: string;
    answersCallback: AnswersCallbackFunction;
}

export interface QuestionProps {
    question: QuestionPrepared;
    answer: any;
    index: number;
}