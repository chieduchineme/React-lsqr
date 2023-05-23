// loginAction.js

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
  } from '../types';
  
  export const loginRequest = () => ({
    type: LOGIN_REQUEST
  });
  
  export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
  });
  
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
  });
  
  export const loginAction = (credentials) => {
    return (dispatch) => {
      dispatch(loginRequest());
  
      // Perform asynchronous login operation here
      // For example, make an API call to authenticate the user
  
      // Simulating an asynchronous API call with setTimeout
      setTimeout(() => {
        if (credentials.username === 'admin' && credentials.password === 'password') {
          const user = { username: credentials.username };
          dispatch(loginSuccess(user));
        } else {
          const error = 'Invalid username or password';
          dispatch(loginFailure(error));
        }
      }, 2000);
    };
  };
  