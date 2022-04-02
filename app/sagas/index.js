import { all, takeLatest } from 'redux-saga/effects';
import { onBoardTypes } from '../redux/KeyRedux';
import { getOnBoardData } from './Key';

export default function* rootSaga() {
  yield all([takeLatest(onBoardTypes.ON_BOARDING_REQUEST, getOnBoardData)]);
}
