import { put } from 'redux-saga/effects';
import OnBoardActions from '../redux/KeyRedux';

export function* getOnBoardData(action) {
  yield put(OnBoardActions.onBoardingSuccess(action.data));
}
