import { LOAD_REQUESTS, REQUEST_LOADING, PUT_REQUESTS_DATA } from '../constants/requests';

const defaultState = {
  requests: [],
  isLoading: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_REQUESTS:
      return state;
    case PUT_REQUESTS_DATA:
      return {
        ...state,
        requests: [
          ...action.data
        ]
      };
    case REQUEST_LOADING:
      console.log(action);
      return {
        ...state,
        isLoading: action.status
      };
    default:
      return state;
  }
};

export default reducer;