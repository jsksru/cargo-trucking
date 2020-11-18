import { LOAD_REQUESTS, REQUEST_LOADING, PUT_REQUESTS_DATA } from '../constants/requests';

export const loadRequests = () => ({
  type: LOAD_REQUESTS,
});

export const putRequestsData = (data) => ({
  type: PUT_REQUESTS_DATA,
  data,
});

export const changeLoadingStatus = (status) => ({
  type: REQUEST_LOADING,
  status,
});