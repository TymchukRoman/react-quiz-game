import { prepareQuestions, prepareAnswers } from './core/preparators'
import { questions, answers } from './test.data'

describe('Questions preparator test', () => {
  const pa = prepareQuestions(questions.data);
  it('is same number', () => {
    expect(pa.length).toBe(questions.result.length);
  })
  it('is fields saved', () => {
    expect(pa[0].text).toBe(questions.result[0].text);
    expect(pa[0].correctAnswer.label).toBe(questions.result[0].correctAnswer.label);
    expect(pa[0].cost).toBe(questions.result[0].cost);
  })
  it('is ids added', () => {
    expect(typeof pa[0].id).toBe("string");
    expect(typeof pa[0].correctAnswer.id).toBe("string");
    pa[0].answers.forEach(a => {
      expect(typeof a.id).toBe("string");
    })
  })
})

describe('Answer preparator test', () => {
  const resultCallback = (result: any) => {
    it('is answers parsed correctly', () => {
      result.answers.forEach((a: any, i: number) => {
        expect(a).toEqual(answers.result.answers[i]);
      })
    })

    it('is score correct', () => {
      expect(result.score).toEqual(answers.result.score);
    })
  }
  prepareAnswers(answers.data.answers, answers.data.preparedQuestions, resultCallback, () => { }, () => { });
})
