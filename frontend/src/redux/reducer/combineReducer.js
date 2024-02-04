import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import addrReducer from './addrReducer';
import catReducer from './catReducer';
import brandReducer from './brandReducer';
import subCategoryReducer from './subcatReducer';
import productReducer from './productReducer';
import couponReducer from './couponReducer';
import orderReducer from './orderReducer';

export const combineReducer = combineReducers({
  authReducer: authReducer,
  userReducer: userReducer,
  addrReducer: addrReducer,
  catReducer: catReducer,
  brandReducer: brandReducer,
  subCatReducer: subCategoryReducer,
  productReducer: productReducer,
  orderReducer: orderReducer,
  couponReducer: couponReducer,
  subCategoryReducer: subCategoryReducer,
});
