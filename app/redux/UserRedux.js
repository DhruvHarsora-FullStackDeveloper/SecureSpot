import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  logOutRequest: ['data'],
  logOutSuccess: ['successValues'],
  logOutError: ['error'],
  signUpRequest: ['data', 'value'],
  signUpSuccess: ['successValues'],
  signUpError: ['error'],
});

export const userTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  userValue: null,
  fetching: null,
  error: null,
  fetchingLogOut: null,
  errorLogOut: null,
});

/* ------------- Selectors ------------- */
export const onUserSelectors = {
  fetching: state => state.user.fetching,
  getUserData: state => state.user.userValue,
  getLogOutData: state => state.user.userValue,
  getError: state => state.user.error,
};

/* ------------- Reducers ------------- */
export const requestSignUp = (state, action) => {
  return state.merge({
    fetching: true,
  });
};

export const successSignUp = (state, action) => {
  return state.merge({
    userValue: action.successValues,
    fetching: false,
    error: false,
  });
};

export const requestSignUpError = (state, { error }) => {
  return state.merge({
    fetching: false,
    error: error,
  });
};

export const requestLogOut = (state, action) => {
  return state.merge({
    fetchingLogOut: true,
  });
};

export const successLogOut = (state, action) => {
  return state.merge({
    userValue: null,
    fetchingLogOut: false,
    errorLogOut: false,
  });
};

export const requestLogOutError = (state, { error }) => {
  return state.merge({
    fetchingLogOut: false,
    errorLogOut: error,
  });
};

/* ------------- Hookup Reducers To Types ------------- */
export const userReducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_UP_REQUEST]: requestSignUp,
  [Types.LOG_OUT_REQUEST]: requestLogOut,
  [Types.LOG_OUT_SUCCESS]: successLogOut,
  [Types.LOG_OUT_ERROR]: requestLogOutError,
  [Types.SIGN_UP_SUCCESS]: successSignUp,
  [Types.SIGN_UP_ERROR]: requestSignUpError,
});
