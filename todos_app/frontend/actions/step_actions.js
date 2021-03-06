import * as APIUtil from '../util/step_api_util';
import { receiveErrors } from '../actions/error_actions';

export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';

export const receiveSteps = (steps) => ({
  type: RECEIVE_STEPS,
  steps,
});

export const receiveStep = (step) => ({
  type: RECEIVE_STEP,
  step,
});

export const removeStep = (step) => ({
  type: REMOVE_STEP,
  step,
});

export const fetchSteps = () => {
  return (dispatch) => {
    return APIUtil.fetchSteps().then((steps) => dispatch(receiveSteps(steps)));
  };
};

export const createStep = (step) => {
  return (dispatch) => {
    return APIUtil.createStep(step).then(
      (step) => dispatch(receiveStep(step)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const updateStep = (step) => {
  return (dispatch) => {
    return APIUtil.updateStep(step).then(
      (step) => dispatch(receiveStep(step)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const deleteStep = (step) => {
  return (dispatch) => {
    return APIUtil.deleteStep(step).then(
      (step) => dispatch(removeStep(step)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};
