import {
  ADD_COUPON,
  GET_ALL_COUPON,
  DELTET_COUPON,
  GET_ONE_COUPON,
  EDIT_COUPON,
} from '../type';

const inital = {
  addCoupon: [],
  getAllCoupon: [],
  getOneCoupon: [],
  delCoupon: [],
  updateCoupon: [],
};

const couponReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_COUPON:
      return {
        ...state,
        addCoupon: action.payload,
      };

    case GET_ALL_COUPON:
      return {
        ...state,
        getAllCoupon: action.payload,
      };
    case GET_ONE_COUPON:
      return {
        ...state,
        getOneCoupon: action.payload,
      };

    case EDIT_COUPON:
      return {
        ...state,
        updateCoupon: action.payload,
      };

    case DELTET_COUPON:
      return {
        ...state,
        delCoupon: action.payload,
      };

    default:
      return state;
  }
};
export default couponReducer;
