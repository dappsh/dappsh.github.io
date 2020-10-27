import reducer from '../questionList'
import * as types from '../../actionType'

describe('question list reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({questions: []})
  })

  it('should handle ADD_QUESTIONS', () => {
    expect(
      reducer([], {
        type: types.ADD_QUESTIONS,
        questions: [{
          id: 1,
          question: '',
          respondent: [{
            id: 0,
            optionValue: '0',
            answer: ''
          }],
          allowNone: false,
          shuffleOrder: false,
        }]
      })
    ).toEqual([
      {
        id: 1,
        question: '',
        respondent: [{
          id: 0,
          optionValue: '0',
          answer: ''
        }],
        allowNone: false,
        shuffleOrder: false,
      }
    ])

  })
})