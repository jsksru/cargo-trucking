import api from '../api';

export const loadRequests = (data) => ({
  type: 'LOAD_REQUESTS',
  data,
});

export const enableLoading = () => ({
  type: 'ENABLE_LOADING',
});

export const disableLoading = () => ({
  type: 'DISABLE_LOADING',
});

export const enableSaving = () => ({
  type: 'ENABLE_SAVING',
});

export const disableSaving = () => ({
  type: 'DISABLE_SAVING',
});

export const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});

export const loadRequestsAsync = () => {
  return async(dispatch, getState) => {
    const state = getState();

    dispatch(enableLoading());
    try {
      const dataFromServer = await api.requests.getAll(state.filters);
      if (dataFromServer && dataFromServer.length >= 0) {
        dispatch(loadRequests(dataFromServer));
      } 
    } catch (err) {
      console.log(err);
    }
    dispatch(disableLoading());
  };
};

export const deleteRequestAsync = (id, callback) => {
  return async(dispatch) => {
    dispatch(enableSaving());
    try {
      const dataFromServer = await api.requests.deleteById(id);
      if (dataFromServer && dataFromServer.newLength >= 0) {
        dispatch(loadRequestsAsync());
      } 
    } catch (err) {
      console.log(err);
    }
    dispatch(disableSaving());
    callback();
  };
};