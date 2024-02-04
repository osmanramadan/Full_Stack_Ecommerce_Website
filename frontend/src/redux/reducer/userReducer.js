import { UPDATE_USER_PROFILE } from '../type';

const inital = {
  updateUserProfile: [],
};

const userReducer = (state = inital, action) => {
  switch (action.type) {
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        updateUserProfile: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
