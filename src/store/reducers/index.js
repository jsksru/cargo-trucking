import { combineReducers } from 'redux';
import RequestsReducer from './requests';
import ErrorsReducer from './errors';

const rootReducer = combineReducers({
  requests: RequestsReducer,
  errors: ErrorsReducer,
});

export default rootReducer;