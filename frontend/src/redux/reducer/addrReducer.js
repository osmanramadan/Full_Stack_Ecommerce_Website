import {
  GET_ALL_USER_ADDRESS,
  ADD_USER_ADDRESS,
  DELETE_USER_ADDRESS,
  EDIT_USER_ADDRESS,
} from '../type';

const inital = {
  userAddresses: [],
  addAddress: [],
  deleteAddress: [],
  updateAddress: [],
};

const addressReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_USER_ADDRESS:
      return {
        ...state,
        userAddresses: action.payload,
      };
    case ADD_USER_ADDRESS:
      return {
        ...state,
        addAddress: action.payload,
      };

    case DELETE_USER_ADDRESS:
      return {
        ...state,
        deleteAddress: action.payload,
      };
    case EDIT_USER_ADDRESS:
      return {
        ...state,
        updateAddress: action.payload,
      };

    default:
      return state;
  }
};
export default addressReducer;
