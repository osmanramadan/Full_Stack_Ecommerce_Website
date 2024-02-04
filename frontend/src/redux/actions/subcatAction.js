import { useGetData } from '../../crud/useGetData';
import { useInsertData } from '../../crud/useInsertData';
import { CREATE_SUB_CATEGORY, GET_SUB_CATEGORY } from '../type';

export const createSubCategory = (Data) => async (dispatch) => {
  try {
    const response = await useInsertData(
      `/api/v1/subcategory/addsubcategory`,
      Data,
    );
    dispatch({
      type: CREATE_SUB_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_SUB_CATEGORY,
      payload: 'Error ' + e,
    });
  }
};
export const getSubCategory = () => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/subcategory`);
    dispatch({
      type: GET_SUB_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_SUB_CATEGORY,
      payload: 'Error ' + e,
    });
  }
};
