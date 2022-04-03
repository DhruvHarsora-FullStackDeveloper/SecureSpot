import { put } from 'redux-saga/effects';
import UserActions from '../redux/UserRedux';
import { addData } from '../services/Api';
import { successData } from '../services/Utils';

export function* addUserRegistration(action) {
  yield* successData(
    addData,
    UserActions.signUpSuccess,
    action,
    UserActions.signUpError,
  );
}

export function* userLogOut(action) {
  yield put(UserActions.logOutSuccess(action.data));
}
