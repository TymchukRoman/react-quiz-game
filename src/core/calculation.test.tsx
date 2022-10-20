import { getScore } from "./calculation";
import { scores } from "./test.data";

describe('Answer preparator test', () => {
    scores.forEach((testcase) => {
        it(testcase.name, () => {
            const score = getScore(testcase.input.preparedAnswers, testcase.input.preparedQuestions);
            expect(score).toEqual(testcase.expected);
        })
    })
})