import {AnyAction} from 'redux';
import {Actions} from './actions';

export const LoginReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    // Store authenticated user data
    case Actions.FETCH:
      return Object.assign({}, state, {
        userData: action.userData,
      });

    default:
      return state;
  }
};
