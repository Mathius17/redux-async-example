import * as types from '../actions/actionTypes'

const initialState = {
  username: null,
  loading: false,
  error: null,
  users: [],
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_USER:
      return {
        ...state,
        username: action.username,
        loading: true,
      };
    
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        username: null,
        error: null,
        users: [...state.users, action.user],
      };
    
    case types.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        username: null,
        error: action.error,
      };
    
    case types.CLEAR_USERS:
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
}

export default appReducer;
