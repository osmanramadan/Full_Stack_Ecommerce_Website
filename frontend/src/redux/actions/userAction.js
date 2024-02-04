import { UPDATE_USER_PROFILE } from '../type';
import { _useInsertData } from '../../crud/useInsertData';
import { _useGetDataToken } from '../../crud/useGetData';
import { useInsUpdateData } from '../../crud/useUpdateData';

export const updateUserProfileData = (body) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(
      `/api/v1/users/updateuserprofile`,
      body,
    );
    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: e.response,
    });
  }
};
