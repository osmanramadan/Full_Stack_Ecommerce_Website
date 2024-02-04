import { CREATE_SUB_CATEGORY, GET_SUB_CATEGORY } from '../type';

const inital = {
  createSubCategory: [],
  getSubCategory: [],
};

const subCategoryReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_SUB_CATEGORY:
      return {
        ...state,
        createSubCategory: action.payload,
      };

    case GET_SUB_CATEGORY:
      return {
        ...state,
        getSubCategory: action.payload,
      };

    default:
      return state;
  }
};
export default subCategoryReducer;
