import { all, takeLatest } from 'redux-saga/effects';
import { onBoardTypes } from '../redux/KeyRedux';
import { userTypes } from '../redux/UserRedux';
import { addUserRegistration, userLogOut } from '../sagas/Auth';
import { getOnBoardData } from './Key';

export default function* rootSaga() {
  yield all([
    takeLatest(onBoardTypes.ON_BOARDING_REQUEST, getOnBoardData),
    takeLatest(userTypes.SIGN_UP_REQUEST, addUserRegistration),
    takeLatest(userTypes.LOG_OUT_REQUEST, userLogOut),
  ]);
}
