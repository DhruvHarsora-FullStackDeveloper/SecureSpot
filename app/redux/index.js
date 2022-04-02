import { combineReducers } from 'redux';
import { onBoardingReducer } from '../redux/KeyRedux';

export const rootReducer = combineReducers({
  onBoard: onBoardingReducer,
});
