import { UPDATE_REQUESTS, CHANGE_LOADING_STATUS, CHANGE_SAVING_STATUS } from '../constants/requests';

const defaultState = {
  requests: [],
  isLoading: false,
  isSaving: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_REQUESTS:
      return {
        ...state,
        requests: [
          ...action.data
        ]
      };
    case CHANGE_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.status
      };
    case CHANGE_SAVING_STATUS:
      return {
        ...state,
        isSaving: action.status
      };
    default:
      return state;
  }
};

export default reducer;