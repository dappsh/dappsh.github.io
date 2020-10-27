import { combineReducers } from 'redux';
import questionList from './questionList';

const reducer = combineReducers({
  questionList,
});

export default reducer;
