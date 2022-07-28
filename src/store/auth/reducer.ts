import {
  POST_AUTH_FAILURE,
  POST_AUTH_STARTED,
  POST_AUTH_SUCCES,
} from "./actionTypes";

const initialState = {
  isAuth: false,
  user: null,
  token: null,
  error: null,
};

export default function Auth(state = initialState, action: any) {
  switch (action.type) {
    case POST_AUTH_STARTED: {
      return {
        ...state,
      };
    }
    case POST_AUTH_SUCCES: {
      const { user, token } = action.payload;
      return {
        ...state,
        isAuth: true,
        user,
        token,
      };
    }
    case POST_AUTH_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
