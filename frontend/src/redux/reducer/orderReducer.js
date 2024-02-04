import {
  GET_ALL_ORDER,
  CREATE_ORDER_CASH,
  UPDATE_ORDER_STATUS,
  GET_USER_ORDER,
} from '../type';

const inital = {
  createOrder: [],
  updateStatus: [],
  getOrders: [],
  getUserOrders: [],
};

const orderReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_ORDER_CASH:
      return {
        ...state,
        createOrder: action.payload,
      };

    case GET_ALL_ORDER:
      return {
        ...state,
        getOrders: action.payload,
      };
    case GET_USER_ORDER:
      return {
        ...state,
        getUserOrders: action.payload,
      };

    case UPDATE_ORDER_STATUS:
      return {
        ...state,
        updateStatus: action.payload,
      };

    default:
      return state;
  }
};
export default orderReducer;
