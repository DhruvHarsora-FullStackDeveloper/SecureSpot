import apisauce from 'apisauce';
import { call, put } from 'redux-saga/effects';
import { ConstStrings } from '../constants';

export const api = apisauce.create({
  baseURL: ConstStrings.BASE_URL2,
  timeout: 30000,
  headers: {
    'Cache-Control': 'no-cache',
    Accept: 'application/vnd.github.v3+json',
    // Authentication: `Bearer ${authToken.payload.}`,
  },
});

export async function getError(response) {
  if (response?.problem === 'NETWORK_ERROR') {
    return 'Please check your internet connection';
  }
  if (['CONNECTION_ERROR', 'SERVER_ERROR'].includes(response?.problem)) {
    return 'Server is not available';
  }
  return 'Something went wrong';
}

function* handleResponse(response, onSuccess, onFailure) {
  // console.log('=============================');
  // console.log('response: ', response);
  if (response?.status === 200) {
    yield put(onSuccess(response?.data));
  } else {
    const error = yield call(getError, response);
    yield put(onFailure(error));
  }
}

export function* successData(dataFun, actionType, action, onFailure) {
  console.log('actiondfdf: ', action);
  // console.log('Action: ', action);
  const response = yield call(dataFun, action.data, action.value);
  console.log('Response Fork: ', response);
  console.log('=============================');
  yield* handleResponse(response, actionType, onFailure);
}
