import { combineReducers } from 'redux';
import { onBoardingReducer } from '../redux/KeyRedux';
import { userReducer } from '../redux/UserRedux';

export const rootReducer = combineReducers({
  onBoard: onBoardingReducer,
  user: userReducer,
});
