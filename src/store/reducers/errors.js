import { ERROR_ENABLE, ERROR_DISABLE, CHANGE_ERROR_TEXT } from '../constants/errors';

const defaultState = {
  error: false,
  errorMessage: '',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ERROR_ENABLE:
      return {
        ...state,
        error: true
      };
    case ERROR_DISABLE:
      return {
        ...state,
        error: false
      };
    case CHANGE_ERROR_TEXT:
      return {
        ...state,
        errorMessage: action.text
      };
    default:
      return state;
  }
};

export default reducer;