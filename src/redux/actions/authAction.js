import {AUTH_TYPE} from '../types';

const loggedAction = payload => {
  return {
    type: AUTH_TYPE.LOG_GED,
    payload,
  };
};
const logoutAction = () => {
  return {
    type: AUTH_TYPE.LOG_OUT,
  };
};

export {loggedAction, logoutAction};
