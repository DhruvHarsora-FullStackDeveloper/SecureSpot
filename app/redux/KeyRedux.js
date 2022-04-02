import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  onBoardingRequest: ['data'],
  onBoardingSuccess: ['successValues'],
  OnBoardingError: ['error'],
});

export const onBoardTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  onBoardingValue: true,
  fetching: null,
  error: null,
});

/* ------------- Selectors ------------- */
export const onBoardSelectors = {
  fetching: state => state.onBoard.fetching,
  getOnBoardData: state => state.onBoard.onBoardingValue,
  getError: state => state.onBoard.error,
};

/* ------------- Reducers ------------- */
export const request = (state, action) => {
  return state.merge({
    fetching: true,
  });
};

export const success = (state, action) => {
  return state.merge({
    onBoardingValue: false,
    fetching: false,
    error: false,
  });
};

export const reqError = (state, { error }) => {
  return state.merge({
    fetching: false,
    error: error,
  });
};

/* ------------- Hookup Reducers To Types ------------- */
export const onBoardingReducer = createReducer(INITIAL_STATE, {
  [Types.ON_BOARDING_REQUEST]: request,
  [Types.ON_BOARDING_SUCCESS]: success,
  [Types.ON_BOARDING_ERROR]: reqError,
});
