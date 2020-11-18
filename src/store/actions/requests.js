import { LOAD_REQUESTS_TRIGGER, UPDATE_REQUESTS, CHANGE_LOADING_STATUS, CHANGE_SAVING_STATUS, NEW_REQUEST } from '../constants/requests';

export const loadRequestsTrigger = () => ({
  type: LOAD_REQUESTS_TRIGGER,
});

export const updateRequests = (data) => ({
  type: UPDATE_REQUESTS,
  data,
});

export const changeLoadingStatus = (status) => ({
  type: CHANGE_LOADING_STATUS,
  status,
});

export const changeSavingStatus = (status) => ({
  type: CHANGE_SAVING_STATUS,
  status,
});

export const newRequest = (data , historyRouter) => ({
  type: NEW_REQUEST,
  data,
  historyRouter,
});