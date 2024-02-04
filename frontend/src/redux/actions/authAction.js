import {
  CREATE_NEW_USER,
  RESET_PASSWORD,
  GET_ALL_USER_ADDRESS,
  VERIFY_PASSWORD,
  FOREGT_PASSWORD,
  LOGIN_USER,
  UPDATE_USER_PASSWORD,
} from '../type';
import { useInsertData } from '../../crud/useInsertData';
import { _useGetDataToken, useGetData } from '../../crud/useGetData';
import { useInsUpdateData } from '../../crud/useUpdateData';

//create new user
export const createNewUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/users/signup`, data);
    dispatch({
      type: CREATE_NEW_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_USER,
      payload: e.response,
    });
  }
};

//login  user
export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/users/login`, data);
    dispatch({
      type: LOGIN_USER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    });
  }
};

// forget  passwrod
export const forgetPassword = (email) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/users/forgotPassword`, email);
    dispatch({
      type: FOREGT_PASSWORD,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: FOREGT_PASSWORD,
      payload: e.response,
    });
  }
};

// verify  passwrod
export const verifyPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/users/verifyResetCode`, data);
    dispatch({
      type: VERIFY_PASSWORD,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: VERIFY_PASSWORD,
      payload: e.response,
    });
  }
};

// reset  passwrod
export const resetPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/users/resetPassword`, data);
    dispatch({
      type: RESET_PASSWORD,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: RESET_PASSWORD,
      payload: e.response,
    });
  }
};

//update  user password
export const updateUserPassword = (body) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(
      `/api/v1/users/updateuserpassword`,
      body,
    );

    dispatch({
      type: UPDATE_USER_PASSWORD,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_USER_PASSWORD,
      payload: e.response,
    });
  }
};

export const userAddresses = (body) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/addresses/viewuseraddress`,
      body,
    );
    console.log(response);
    dispatch({
      type: GET_ALL_USER_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_USER_ADDRESS,
      payload: e.response,
    });
  }
};
