import { CREATE_CATEGORY, GET_ALL_CATEGORY } from '../type';

const inital = {
  createCategory: [],
  getAllCategory: [],
};

const categoryReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return {
        ...state,
        createCategory: action.payload,
      };
    case GET_ALL_CATEGORY:
      return {
        ...state,
        getAllCategory: action.payload,
      };

    default:
      return state;
  }
};
export default categoryReducer;
