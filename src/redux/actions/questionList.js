import { ADD_QUESTIONS, SET_QUESTION_LIST } from '../actionType';

const questionAction = {
  addQuestion: payload => ({
    type: ADD_QUESTIONS,
    payload,
  }),
  resetQuestion: payload => ({
    type: SET_QUESTION_LIST,
    payload,
  }),
};


export const addNewQuestion = (value) => (dispatch) => {
  return dispatch(questionAction.addQuestion(value))
};


export const setQuestionList = (value) => (dispatch) => {
  return dispatch(questionAction.resetQuestion(value))
};

