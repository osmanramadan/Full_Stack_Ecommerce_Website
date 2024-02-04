import { CREATE_BRAND, GET_ALL_BRAND } from '../type';

const inital = {
  createBrand: [],
  getBrand: [],
};

const brandReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_BRAND:
      return {
        ...state,
        createBrand: action.payload,
      };
    case GET_ALL_BRAND:
      return {
        ...state,
        getBrand: action.payload,
      };

    default:
      return state;
  }
};
export default brandReducer;
