import {
  GET_ALL_USER_ADDRESS,
  ADD_USER_ADDRESS,
  DELETE_USER_ADDRESS,
  EDIT_USER_ADDRESS,
} from '../type';
import { useInsertData } from '../../crud/useInsertData';
import { useGetData } from '../../crud/useGetData';
import { useInsUpdateData } from '../../crud/useUpdateData';

export const userAddresses = (body) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/addresses/viewuseraddress/${body.email}`,
    );

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

export const addAddress = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/addresses/addaddress`, body);

    dispatch({
      type: ADD_USER_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_USER_ADDRESS,
      payload: e.response,
    });
  }
};

export const deleteAddress = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(
      `/api/v1/addresses/deleteaddress`,
      data,
    );

    dispatch({
      type: DELETE_USER_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_USER_ADDRESS,
      payload: e.response,
    });
  }
};

export const updateAddress = (data) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(
      `/api/v1/addresses/updateaddress`,
      data,
    );
    dispatch({
      type: EDIT_USER_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: EDIT_USER_ADDRESS,
      payload: e.response,
    });
  }
};
