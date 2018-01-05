import {  SET_STAGE } from '../actions';

<<<<<<< HEAD
export default (stage = 1, action) => {
=======
export default (stage = 'main_menu', action) => {
>>>>>>> upstream/master
  switch (action.type) {
    case SET_STAGE:
      return action.payload;
    default:
      return stage;
  }
}
