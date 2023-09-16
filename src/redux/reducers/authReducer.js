import {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  PROFILE,
  PROFILE_FAIL,
  PROFILE_SUCCESS,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actions";
let initialState = {
  loading: false,
  data: {},
};

const AuthReducer = (state = initialState, actions) => {
  switch (actions.type) {
    // REGISTER
    case REGISTER:
      return { ...state, loading: true };

    case REGISTER_SUCCESS:
      return { ...state, loading: false };

    case REGISTER_FAIL:
      return { ...state, loading: false };

    // LOGIN
    case LOGIN:
      return { ...state, loading: true };

    case LOGIN_SUCCESS:
      return { ...state, loading: false };

    case LOGIN_FAIL:
      return { ...state, loading: false };

    // PROFILE
    case PROFILE:
      return { ...state, loading: true };

    case PROFILE_SUCCESS:
      return { ...state, data: actions.payload, loading: false };

    case PROFILE_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default AuthReducer;
