import { useInsertDataWithImage } from '../../crud/useInsertData';
import { useGetData } from '../../crud/useGetData';

import { CREATE_CATEGORY, GET_ALL_CATEGORY } from '../type';

export const createCategory = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(
      `/api/v1/category/addcategory`,
      formData,
    );
    dispatch({
      type: CREATE_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_CATEGORY,
      payload: 'Error ' + e,
    });
  }
};

export const getAllCategory = (Data) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/category`, Data);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: 'Error ' + e,
    });
  }
};
