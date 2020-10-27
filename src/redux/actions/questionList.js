import { ADD_QUESTIONS, RESET_QUESTION_LIST } from '../actionType';

const questionAction = {
  addQuestion: payload => ({
    type: ADD_QUESTIONS,
    payload,
  }),
  resetQuestion: payload => ({
    type: RESET_QUESTION_LIST,
    payload,
  }),
};


export const addNewQuestion = (value) => (dispatch) => {
  return dispatch(questionAction.addQuestion(value))
};


export const resetQuestionList = (value) => (dispatch) => {
  return dispatch(questionAction.resetQuestion(value))
};

