
/* Dependencies */
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme'
import { Provider } from 'react-redux';
import store from '../../../redux/store';

/* Components */
import QuestionSurvey from '../QuestionSurvey'


configure({adapter: new Adapter()});

  it('check redux state defined', () => {
    const wrapper = shallow(
    <Provider store={store}>
      <QuestionSurvey />
    </Provider>
    )

    wrapper.dive({ context: { store } }).simulate('click');
    const state = store.getState()
    expect(state.questionList.questions).toBeDefined()
   
  })