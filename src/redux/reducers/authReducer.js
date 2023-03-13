import {AUTH_TYPE} from '../types';

const initState = {
  logged: false,
  userInfo: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH_TYPE.LOG_IN:
      return {
        ...state,
        userInfo: action.payload,
      };
    case AUTH_TYPE.LOG_OUT:
      return {
        logged: false,
        userInfo: null,
      };
    case AUTH_TYPE.LOG_GED:
      return {
        logged: true,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
