import { useGetData } from '../../crud/useGetData';
import { useInsertDataWithImage } from '../../crud/useInsertData';
import { CREATE_BRAND, GET_ALL_BRAND } from '../type';

export const createBrand = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(
      `/api/v1/brand/addmark`,
      formData,
    );
    dispatch({
      type: CREATE_BRAND,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_BRAND,
      payload: 'Error ' + e,
    });
  }
};
export const getBrand = () => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brand`);
    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_BRAND,
      payload: 'Error ' + e,
    });
  }
};
