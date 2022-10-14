import {
    Score,
    PreparedAnswer,
    QuestionPrepared
} from "../types";

export const getScore = (preparedAnswers: PreparedAnswer[], preparedQuestions: QuestionPrepared[]): Score => {
    const {
        totalCost,
        totalNumber
    } = preparedQuestions.reduce((acc, answer) => {
        return {
            totalCost: acc.totalCost + (answer.cost ? +answer.cost : 0),
            totalNumber: acc.totalNumber + 1
        }
    }, {
        totalCost: 0,
        totalNumber: 0
    });
    const {
        scoredCost,
        scoredNumber,
    } = preparedAnswers.reduce((acc, answer) => {
        return {
            scoredCost: acc.scoredCost + (answer.correct && answer.cost ? +answer.cost : 0),
            scoredNumber: acc.scoredNumber + (answer.correct ? 1 : 0),
        }
    }, {
        scoredCost: 0,
        scoredNumber: 0,
    });

    return {
        scoredNumber: scoredNumber,
        scoredCost: scoredCost,
        correctPercentage: `${Math.floor(scoredNumber * 100 / totalNumber)}%`,
        costPercentage: totalCost ? `${Math.floor(scoredCost * 100 / totalCost)}%` : "100%",
        correctOutOf: `${scoredNumber}/${totalNumber}`,
        costOutOf: `${scoredCost}/${totalCost}`,
    }
}