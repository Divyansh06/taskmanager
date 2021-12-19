import {
  USER_DATA_FETCH,
  USER_DATA_SUCCESS,
  USER_DATA_FAIL,
  AUTH_TOKEN_FETCH,
  AUTH_TOKEN_SUCCESS,
  AUTH_TOKEN_FAIL,
} from "../../ActionTypes/User/UserActionTypes";

const initialState = {
  error: {
    user_data: false,
    auth_token: false,
  },

  loading: {
    user_data: false,
    auth_token: false,
  },

  data: {
    user_data: {},
    auth_token: "",
  },
};

export default function reducer(state = initialState, action) {
  switch (action.Type) {
    // USER DATA ACTIONS TO FETCH AND MAINTAIN USER DETAILS
    case USER_DATA_FETCH:
      return (state = {
        ...state,
        loading: {
          ...state.loading,
          user_data: true,
        },
      });

    case USER_DATA_SUCCESS:
      return (state = {
        ...state,
        loading: {
          ...state.loading,
          user_data: false,
        },
        data: {
          ...state.data,
          user_data: action.Payload,
        },
      });

    case USER_DATA_FAIL:
      return (state = {
        ...state,
        loading: {
          ...state.loading,
          user_data: false,
        },
        error: {
          ...state.error,
          user_data: true,
        },
      });

    // AUTH TOKEN OBJECT TO FETCH AND MAINTAIN ACCESS TOKEN
    case AUTH_TOKEN_FETCH:
      return (state = {
        ...state,
        loading: {
          ...state.loading,
          auth_token: true,
        },
      });

    case AUTH_TOKEN_SUCCESS:
      return (state = {
        ...state,
        loading: {
          ...state.loading,
          auth_token: false,
        },
        data: {
          ...state.data,
          auth_token: action.Payload,
        },
      });

    case AUTH_TOKEN_FAIL:
      return (state = {
        ...state,
        loading: {
          ...state.loading,
          auth_token: false,
        },
        error: {
          ...state.error,
          auth_token: true,
        },
      });

    default:
      return state;
  }
}
