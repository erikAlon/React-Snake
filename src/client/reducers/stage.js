import {  SET_STAGE } from '../actions';

export default (stage = 1, action) => {
  switch (action.type) {
    case SET_STAGE:
      return action.payload;
    default:
      return stage;
  }
}
