import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { trainFrequencyReducer, addTrainFrequencyReducer } from './pages/train-frequency/reducers/reducers';
import { timeframeReducer } from './components/dateTime/timeframeReducer';
import { messageReducer } from './components/message/reducer';
import thunk from 'redux-thunk';
import AppState  from './AppState';

const rootReducer = combineReducers<AppState>({ 
  trainFrequencies: trainFrequencyReducer,
  timeframes: timeframeReducer, 
  messages: messageReducer,
  addTrainFrequency: addTrainFrequencyReducer,
});

export default function configureStore(): Store<AppState, any> {
  return createStore(rootReducer, undefined, applyMiddleware(thunk)); 
}