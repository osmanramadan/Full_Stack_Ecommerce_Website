import { useGetData } from '../../crud/useGetData';
import { useInsertData } from '../../crud/useInsertData';
import { useInsUpdateData } from '../../crud/useUpdateData';
import {
  CREATE_ORDER_CASH,
  GET_ALL_ORDER,
  UPDATE_ORDER_STATUS,
  GET_USER_ORDER,
} from '../type';

export const createOrder = (Data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/orders`, Data);

    dispatch({
      type: CREATE_ORDER_CASH,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: 'Error ' + e,
    });
  }
};

export const getOrders = () => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/orders`);

    dispatch({
      type: GET_ALL_ORDER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_ORDER,
      payload: 'Error ' + e,
    });
  }
};
export const getOrdersByUser = (userid) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/orders/${userid}`);

    dispatch({
      type: GET_USER_ORDER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_USER_ORDER,
      payload: 'Error ' + e,
    });
  }
};

export const changeOrderStatus = (data) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/orders`, data);

    dispatch({
      type: UPDATE_ORDER_STATUS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ORDER_STATUS,
      payload: 'Error ' + e,
    });
  }
};
