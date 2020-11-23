const initState = {
  loading: true,
  saving: false,
  requests: [],
  filters: {
    sort: 'id',
    reverse: false,
    search: '',
  },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOAD_REQUESTS':
      return {
        ...state,
        requests: action.data
      };
    case 'ENABLE_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'ENABLE_SAVING':
      return {
        ...state,
        saving: true
      };
    case 'DISABLE_SAVING':
      return {
        ...state,
        saving: false
      };
    case 'DISABLE_LOADING':
      return {
        ...state,
        loading: false
      };
    case 'CHANGE_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.filter,
        }
      };
    default:
      return state;
  }
};

export default reducer;