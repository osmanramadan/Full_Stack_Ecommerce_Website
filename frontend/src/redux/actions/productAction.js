import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETALIS,
  CREATE_PRODUCTS,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
  ADD_COMMENT,
  SHOW_COMMENTS,
  GET_PRODUCT_STARS,
  SEARCH_PRODUCTS,
  NEW_CLOTHES,
} from '../type';

import { useInsertData } from '../../crud/useInsertData';
import { useGetData } from '../../crud/useGetData';
import { useInsUpdateData } from '../../crud/useUpdateData';

export const getProducts = () => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products`);

    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: e.response,
    });
  }
};

export const getNewClothes = () => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products/newclothes`);

    dispatch({
      type: NEW_CLOTHES,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: NEW_CLOTHES,
      payload: e.response,
    });
  }
};
export const searchProducts = (search) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products`);
    const data = response.data.filter((v) =>
      v.ptitle.toLowerCase().includes(search.toLowerCase()),
    );

    dispatch({
      type: SEARCH_PRODUCTS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: SEARCH_PRODUCTS,
      payload: e.response,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products/${id}`);

    dispatch({
      type: GET_PRODUCT_DETALIS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_PRODUCT_DETALIS,
      payload: e.response,
    });
  }
};

export const addProduct = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/products`, body);

    dispatch({
      type: CREATE_PRODUCTS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_PRODUCTS,
      payload: e.response,
    });
  }
};
export const addcomment = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/products/addcomment`, body);

    dispatch({
      type: ADD_COMMENT,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_COMMENT,
      payload: e.response,
    });
  }
};
export const showcomments = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products/showcomments/${id.id}`);

    dispatch({
      type: SHOW_COMMENTS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: SHOW_COMMENTS,
      payload: e.response,
    });
  }
};
export const showProductStars = (id) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products/showproductstars/${id.id}`,
    );
    dispatch({
      type: GET_PRODUCT_STARS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_PRODUCT_STARS,
      payload: e.response,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/products/delete/${id}`);

    dispatch({
      type: DELETE_PRODUCTS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_PRODUCTS,
      payload: e.response,
    });
  }
};

export const updateProduct = (data) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/products/update`, data);
    dispatch({
      type: UPDATE_PRODUCTS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_PRODUCTS,
      payload: e.response,
    });
  }
};
