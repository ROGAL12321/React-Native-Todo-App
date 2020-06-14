import {TOGGLE_CAT_VISIBILITY} from '../helpers/actionTypes';

const INITIAL_STATE = {
  isCatImageVisible: true,
};

export const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CAT_VISIBILITY:
      return {
        ...state,
        isCatImageVisible: action.isCatImageVisible,
      };
    default:
      return state;
  }
};

export default mainReducer;
