
export type AnswersCallbackFunction = (preparedAnswers: QuizResult) => void;

export interface Question {
    text: string;
    answers: string[];
    correctAnswer: string;
    id?: string;
    cost?: number;
}

export interface AsyncQuestion {
    text: string;
    answers: {
        id: string;
        label: string;
    }[];
    id: string;
    cost?: number;
}

export interface QuestionPrepared {
    text: string;
    answers: {
        id: string;
        label: string;
    }[];
    correctAnswer?: {
        id: string;
        label: string;
    };
    id: string;
    cost: number;
}

export interface Answer {
    qid: string;
    aid: string;
}

export interface PreparedAnswer {
    text?: string;
    correctAnswer?: {
        id: string;
        label: string;
    };
    id?: string;
    cost?: number;
    answer: Answer;
    correct: boolean;
}

export interface Score {
    scoredNumber: number;
    scoredCost: number;
    correctPercentage: string;
    costPercentage?: string;
    correctOutOf: string;
    costOutOf?: string;
}

export interface QuizResult {
    answers: PreparedAnswer[];
    score: Score;
} 