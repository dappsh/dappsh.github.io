import { ADD_QUESTIONS, SET_QUESTION_LIST} from '../actionType';

const questionList = (state = {
  questions: [],
}, action) => {

  const { type, payload } = action;

  switch (type) {
    case ADD_QUESTIONS: 
    return {
      ...state,
      questions: [...state.questions, payload]
    }
    case SET_QUESTION_LIST: 
    return {
      ...state,
      questions: payload
    }
    default: {
      return state;
    }
  }

};

export default questionList;
