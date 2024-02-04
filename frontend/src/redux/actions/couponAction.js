import {
  ADD_COUPON,
  GET_ALL_COUPON,
  DELTET_COUPON,
  GET_ONE_COUPON,
  EDIT_COUPON,
} from '../type';

import { useInsertData } from '../../crud/useInsertData';
import { useGetData } from '../../crud/useGetData';
import { useInsUpdateData } from '../../crud/useUpdateData';

export const getCoupons = () => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/coupon`);

    dispatch({
      type: GET_ALL_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_COUPON,
      payload: e.response,
    });
  }
};

export const getCoupon = (name) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/coupon/${name}`);

    dispatch({
      type: GET_ONE_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_COUPON,
      payload: e.response,
    });
  }
};

export const addCoupon = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/coupon/addcoupon`, body);

    dispatch({
      type: ADD_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_COUPON,
      payload: e.response,
    });
  }
};

export const deleteCoupon = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/coupon/deletecoupon`, body);

    dispatch({
      type: DELTET_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELTET_COUPON,
      payload: e.response,
    });
  }
};

export const updateCoupon = (data) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(
      `/api/v1/coupon/updatecoupon`,
      data,
    );
    dispatch({
      type: EDIT_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: EDIT_COUPON,
      payload: e.response,
    });
  }
};
