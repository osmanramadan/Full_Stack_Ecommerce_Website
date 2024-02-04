import {
  GET_ALL_PRODUCTS,
  ADD_COMMENT,
  GET_PRODUCT_DETALIS,
  CREATE_PRODUCTS,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
  SHOW_COMMENTS,
  GET_PRODUCT_STARS,
  SEARCH_PRODUCTS,
  NEW_CLOTHES,
} from '../type';

const inital = {
  allProducts: [],
  createProduct: [],
  addComment: [],
  showComments: [],
  showProductStars: [],
  deleteProduct: [],
  updateProduct: [],
  detailsProduct: [],
  searchproducts: [],
  newclothes: [],
};

const productReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETALIS:
      return {
        ...state,
        detailsProduct: action.payload,
      };

    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case CREATE_PRODUCTS:
      return {
        ...state,
        createProduct: action.payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        addComment: action.payload,
      };
    case SHOW_COMMENTS:
      return {
        ...state,
        showComments: action.payload,
      };
    case GET_PRODUCT_STARS:
      return {
        ...state,
        showProductStars: action.payload,
      };

    case DELETE_PRODUCTS:
      return {
        ...state,
        deleteProduct: action.payload,
      };

    case UPDATE_PRODUCTS:
      return {
        ...state,
        updateProduct: action.payload,
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchproducts: action.payload,
      };
    case NEW_CLOTHES:
      return {
        ...state,
        newclothes: action.payload,
      };

    default:
      return state;
  }
};
export default productReducer;
